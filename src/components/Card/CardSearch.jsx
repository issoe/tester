import react from "react";
// import '../../css/style.css';
import './style.css'

export default function CardSearch({ info }) {
    return (
        <div className="my-card-search">
            <div className="my-card-search-logo">
                logo of company
            </div>
            <div className="my-card-search-content">
                <div className="my-card-search-header">{info.position}</div>
                <div>{info.name}</div>
                <div>{info.location}</div>
                <ul>
                    <li>{info.benefit1}</li>
                    <li>{info.benefit2}</li>
                    <li>{info.benefit3}</li>
                </ul>
            </div>
        </div>
    )
}