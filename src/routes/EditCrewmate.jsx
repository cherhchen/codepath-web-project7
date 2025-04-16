import { useState, useEffect } from "react";
import { supabase } from "../client";
import { useParams } from "react-router";

const EditCrewmate = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: "",
        speed: "",
        color: ""
     });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        // Add logic to save the form data to Supabase or handle it as needed
        console.log(formData);
        const { data, error } = await supabase
            .from("Crewmates")
            .update(formData)
            .eq("id", formData.id);
        console.log(data, error);
        alert("Crewmate updated!");
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from("Crewmates")
            .delete()
            .eq("id", id);
        console.log(data, error);
        alert("Crewmate deleted!");
        window.location = "http://localhost:5173/gallery";
    }

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data, error } = await supabase
                .from('Crewmates')
                .select('*') // Or specify columns: 'column1, column2, ...'
                .eq('id', id) // Replace 'id' with your primary key column name
                .single(); // Use .single() if you expect only one result

            if (error) {
                console.error('Error fetching data:', error);
            } else if (data) {
                console.log('Data fetched successfully:', data);
                setFormData(data);
            } else {
                console.log('No data found with that ID.');
            }
        }

        fetchCrewmate();
        
    }, [id])

    return (
        <div className="edit-container">
            <h1>Update Your Crewmate</h1>
            <form onSubmit={handleUpdate}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Speed:
                    <input
                        type="number"
                        name="speed"
                        value={formData.speed}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                {/* <label>
                    Color:
                    <input
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        required
                    />
                </label> */}
                <label>
                    Color:
                    <select id="color" name="color" value={formData.color} onChange={handleChange}>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="purple">Purple</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="pink">Pink</option>
                        <option value="rainbow">Rainbow</option>
                    </select>
                </label>
                <br />
                <div className="button-group">
                    <button onClick={handleUpdate}>Update Crewmate</button>
                    <button onClick={handleDelete}>Delete Crewmate</button>
                </div>
            </form>
        </div>
    );
}

export default EditCrewmate;