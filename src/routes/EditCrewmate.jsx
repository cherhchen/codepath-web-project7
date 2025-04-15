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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add logic to save the form data to Supabase or handle it as needed
        console.log(formData);
        const { data, error } = await supabase
            .from("Crewmates")
            .update(formData)
            .eq("id", formData.id);
        console.log(data, error);
    };

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
            <form onSubmit={handleSubmit}>
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
                <label>
                    Color:
                    <input
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EditCrewmate;