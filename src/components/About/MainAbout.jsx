import React from 'react';
import BloodWithHeart from '../../assets/BloodwithHeart.jpg'

const MainAbout = () => {
    return (
        <section className="container mx-auto text-white body-font">
            <div className='text-center pt-6'>
                <h1 className='text-2xl font-medium title-font mb-4 '>About BloodCare</h1>
                <div className="flex items-center justify-center my-8">
                    <div className="bg-gray-300 h-px w-full sm:w-1/4 md:w-1/2"></div>
                </div>

            </div>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={BloodWithHeart} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <div>
                        <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium">Welcome to BloodCare,</h1>
                        <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium'>your trusted online resource for all things related to blood management in healthcare</h2>
                    </div>
                    <p className="mb-8 leading-relaxed">At BloodCare, we are dedicated to promoting responsible and efficient blood usage, ensuring the safety of patients, and supporting the noble cause of blood donation. Our passion for improving healthcare outcomes drives us to provide you with the latest information, guidelines, and best practices in the field of blood management.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">BECOME TO DONOR</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainAbout;