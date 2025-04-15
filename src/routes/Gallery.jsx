import { useEffect, useState } from "react";
import { supabase } from "../client";
import Crewmate from "../component/Crewmate"

const Gallery = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data, error } = await supabase.from("Crewmates").select("*");
            if (error) {
                console.error("Error fetching crewmates:", error);
            } else {
                console.log("Fetched crewmates:", data);
                setCrewmates(data);
            }
        };

        fetchCrewmates();
    }
    , []);

    return (
        <div className="gallery-container">
            <h1>Crewmate Gallery</h1>
            {crewmates.map((crewmate) =>
                <Crewmate crewmate={crewmate} />
            )}
        </div>
    );
}

export default Gallery;