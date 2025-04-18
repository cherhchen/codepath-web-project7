import { Link } from "react-router";

const Crewmate = ({ crewmate }) => {
    
    return (
        <div className="crewmate-card">
            <p>Name: {crewmate.name} </p>
            <p>Speed: {crewmate.speed}</p>
            <p>Color: {crewmate.color}</p>
            <div className="button-group">
                <Link to={`../${crewmate.id}/details`}>
                    <button>View Profile</button>
                </Link>
                <Link to={`../${crewmate.id}/edit`}>
                    <button>Edit Crewmate</button>
                </Link>
            </div>
        </div>
    );
}

export default Crewmate;