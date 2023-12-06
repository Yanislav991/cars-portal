import React from "react";
import { Car } from "../../types/car";

export const CarCard = (props: Car) => {
    return (
        <>
            <div className="card" style={{ width: "18rem", height: "300px" }}>
                <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.make} - {props.model}</h5>
                    <p className="card-text">Horse Power: {props.horsePower}</p>
                    <p className="card-text">Year: {props.manufactureYearStart} - {props.manufactureYearEnd}</p>
                </div>
            </div >
        </>
    )
}