import { Link } from "react-router";

const Crewmate = ({ crewmate }) => {
    
    return (
        <div>
            <p>Name: {crewmate.name} </p>
            <p>Speed: {crewmate.speed}</p>
            <p>Color: {crewmate.color}</p>
            <Link to={`${crewmate.id}/edit`}>
                <button>Edit Crewmate</button>
            </Link>

            
        </div>
    );
}

export default Crewmate;