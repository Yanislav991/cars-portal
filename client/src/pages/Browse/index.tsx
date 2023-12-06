import { useEffect, useState } from "react";
import axios from "../../axios-config";
import { Car } from "../../types/car"
import { CarCard } from "../../components/CarCard";

export const Browse = () => {
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await axios.get('/api/cars', {
                    headers: {
                        "Authorization": localStorage.getItem('token')
                    }
                });
                setCars(result.data);
            } catch (error) {
                console.log(error);
            }

        })()
    }, []);

    return (
        <div style={{ height: '80vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {cars.map((car, index) =>
            (
                <CarCard {...car} />
            )
            )}
        </div>
    );
}