import React from "react"
import './Contents.css'
import { MdLocationOn } from 'react-icons/md'

export default function Content(props){
    return(
        <div className="travel-container">
            <div>
                <img src={props.item.imageUrl} alt="my-travel-img" className="travel-img"/>
            </div>
            <div className="travel-text-container">
                <div className="travel-location">
                    <MdLocationOn className="travel-local-icon"/>          
                    <p className="travel-location-city">{props.item.location.toUpperCase()}</p>
                    <a href={`${props.item.googleMapsUrl}`}  target="_blank" rel="noopener noreferrer nofollow" className="travel-location-link">View on Google Maps</a>
                </div>
                <div className="travel-info">
                    <div>
                        <h1 className="travel-city-name">{props.item.title}</h1>
                        <h6 className="travel-date">{props.item.startDate} - {props.item.endDate}</h6>
                        <p className="travel-desc">{props.item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}