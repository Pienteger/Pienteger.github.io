import { useEffect, useState } from "react";
import { Alert, Card } from '@fluentui/react-components/unstable';
import { Link } from "react-router-dom";
import { Alert20Filled, Warning20Filled } from "@fluentui/react-icons";
type Career = {
    id: number;
    name: string;
};

const CareerPage = () => {

    const [careers, setCareers] = useState<Career[]>([]);

    useEffect(() => {
        const fetchCareers = async () => {
            const response = await fetch('https://localhost:44321/api/careers');
            const data = await response.json();
            setCareers(data);
        };
        fetchCareers();
    }, []);

    return (
        <div>
            <h1>Careers</h1>
            {/*If  careers is not zero, display them, else print no career available*/}
            {careers.length > 0 ? careers.map((career) => (
                <div key={career.id}>
                    <h2>{career.name}</h2>
                </div>
            )) : <>
                <Card className="mt-5 nb-5">
                    <Warning20Filled />
                    No career opportunity is available at the moment. Please check back later.
                </Card>


            </>}
        </div>
    );
};

export default CareerPage;