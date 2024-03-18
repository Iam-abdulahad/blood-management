import { useEffect } from "react";
import { useState } from "react";
import Donor from "./Donor";
import TsParticles3 from "../Background/TsParticles3";


const Donors = () => {

    const [donors, setDonors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/donors')
            .then(res => res.json())
            .then(data => setDonors(data))
    }, [])

    return (
        <div className="container mx-auto">
            <TsParticles3></TsParticles3>
            <div className="flex items-center my-8">
                <div className="flex-grow bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 h-1 mx-4"></div>
                <div className="text-gray-400 text-lg">Available Donors: {donors.length}</div>
                <div className="flex-grow bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 h-1 mx-4"></div>
            </div>

            <div className=" grid grid-cols-4 gap-4">

                {
                    donors.map(donor => <Donor
                        key={donor._id}
                        donor={donor}
                    ></Donor>)
                }
            </div>
        </div>
    );
};

export default Donors;