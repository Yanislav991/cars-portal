import { useEffect, useState } from "react";
import axios from "../../axios-config";

export const Browse = () => {
    const [cars, setCars] = useState({ hits: [] });

    useEffect(() => {
        (async () => {
            try {
                const result = await axios.get('/api/cars', {
                    headers: {
                        "Authorization": localStorage.getItem('token')
                    }
                });

                console.log(result);
            } catch (error) {
                console.log(error);
            }

        })()
    });

    return (
        <div>
            Browse Page
        </div>
    );
}