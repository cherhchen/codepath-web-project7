import { useState } from "react";
import { supabase } from "../client";

const CreateCrewmate = () => {
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
        const { data, error } = await supabase.from("Crewmates").insert(formData);
        console.log(data, error);
        setFormData({"name": "", "speed": "", "color": ""});
        alert("Crewmated created!")
    };

    return (
        <div className="create-container">
            <h1>Create Crewmate</h1>
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
                    <select id="color" name="color" value={formData.color} onChange={handleChange} required>
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
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default CreateCrewmate;