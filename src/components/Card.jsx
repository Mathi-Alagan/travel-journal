import React from "react";

export default function(props) {

    return(
        
            <div className={`card ${props.isLast}`}>                    
                <img src={props.cardItem.imageUrl} alt={props.cardItem.title} className="card-img"/>                
                <div className="card-desc">
                    <i class="fa-solid fa-location-dot location-logo"></i>
                    <span className="card-desc--loc">{props.cardItem.location}</span>
                    <a href={props.cardItem.googleMapsUrl} className="card-desc--loc-link" target={"_blank"}>View on GoogleMaps</a>
                    <h2 className="card-desc--title">{props.cardItem.title}</h2>
                    <p className="card-desc--dates">{props.cardItem.startDate} - {props.cardItem.endDate}</p>
                    <p className="card-desc--para">{props.cardItem.description}</p>
                </div>
            </div>

        
    )
}