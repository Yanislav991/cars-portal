import { useNavigate } from "react-router-dom";
import axios from "../../axios-config";
import React, { FormEvent, useState } from "react";

export const AddCar = () => {
    const navigate = useNavigate();

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [horsePower, setHorsePower] = useState('');
    const [manufactureYearStart, setManufactureYearStart] = useState('');
    const [manufactureYearEnd, setManufactureYearEnd] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            (async () => {
                await axios.post("/api/cars", {
                    make: make,
                    model: model,
                    horsePower: horsePower,
                    manufactureYearStart: manufactureYearStart,
                    manufactureYearEnd: manufactureYearEnd,
                    imageUrl: imageUrl
                }, {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                }).catch((networkErr) => {
                    alert(networkErr.response.data.error);
                });
            })()

            navigate("/browse")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="col-6 mx-auto mt-5 p-5">
                <h3>Add Car</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" value={make} onChange={(e) => setMake(e.target.value)} />
                        <label className="form-label">Make</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" value={model} onChange={(e) => setModel(e.target.value)} />
                        <label className="form-label">Model</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="number" className="form-control" value={horsePower} onChange={(e) => setHorsePower(e.target.value)} />
                        <label className="form-label">Horse Power:</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="number" className="form-control" value={manufactureYearStart} onChange={(e) => setManufactureYearStart(e.target.value)} />
                        <label className="form-label">Year in which the production started: </label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="number" className="form-control" value={manufactureYearEnd} onChange={(e) => setManufactureYearEnd(e.target.value)} />
                        <label className="form-label">Year in which the production ended: </label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                        <label className="form-label">Car Image URL: </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-4">Add Car</button>
                </form>
            </div>
        </>
    )
}