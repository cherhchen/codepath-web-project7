import { useParams } from "react-router";
import { supabase } from "../client";
import { useEffect, useState } from "react";

const Details = () => {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getCrewmate = async () => {
            const { data, error } = await supabase
            .from('Crewmates')
            .select('*')
            .eq('id', id)
            .single()
        
            if (error) {
                console.error('Error fetching crewmate:', error)
                return null
            } else {
                setCrewmate(data);
            }
            setLoading(false);
            
        }
        getCrewmate();
    }, []);

    const getDescription = (speed) => {
        if (speed <= 10) {
            return "You may want to find a Crewmate with more speed, this one is kind of slow"
        }
        else if (speed <= 50) {
            return "This Crewmate has a little bit of speed"
        }
        else {
            return "This Crewmate will go zoom zoom!"
        }
    }

    return (
        loading ? <h1>Loading...</h1> :
        <div className="right-container">
            <h1>Crewmate: {crewmate.name}</h1>
            <h2>Color: {crewmate.color}</h2>
            <h2>Speed: {crewmate.speed}</h2>
            <h3>{getDescription(crewmate.speed)}</h3>
        </div>
    );
}

export default Details;