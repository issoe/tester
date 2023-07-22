import React from "react";

import { myData } from "data/backend";
import CardSearch from "components/Card/CardSearch";
import './style.css'

export default function DetailPage({input}) {
    
    return (
        <div className="my-center-detailPage">
            {
                myData.map(cardInfo => (
                    <CardSearch info={cardInfo} />
                ))
            }
        </div>
    );
}