import React from 'react';
import './Banner.css';
import Blood_2 from '../../assets/blood-2.jpg';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <section className="text-gray-400 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div>
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">BloodCare BANGLADESH</h1>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">A blood management organization</h1>
                    </div>
                    <p className="mb-8 leading-relaxed font-bold">At LifeSavers Blood Management Foundation, our mission is to ensure the safe, efficient, and sustainable utilization of blood resources to save lives and improve healthcare outcomes. Founded with a vision of a world where no one suffers due to blood shortages or wastage, we have dedicated ourselves to managing this vital resource with precision, compassion, and innovation.</p>
                    <div className="flex justify-center">
                        <Link to='/about_us' className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Know More</Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="bannerImg object-cover object-center rounded" alt="hero" src={Blood_2} />
                </div>
            </div>
        </section>
    );
};

export default Banner;