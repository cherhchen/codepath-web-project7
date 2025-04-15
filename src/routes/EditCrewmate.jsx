const EditCrewmate = () => {
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
    };

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