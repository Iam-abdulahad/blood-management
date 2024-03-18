
import BannerImg from '../../assets/DP/banner.jpg';
import './Donor.css';

const Donor = ({ donor }) => {

    const { name, bloodGroup, gender, countryName, districtName, email, lastDonationDate, } = donor;
    return (
        <div className="container ax-auto ">

            <div className="">
                <div className="h-full items-center border-gray-600 border p-4 rounded-lg backdrop-blur-sm">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={BannerImg} />
                    <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-gray-200">{name} <small> ({gender}) </small></h2>
                        <h3 className="text-gray-300 mb-2">{bloodGroup}</h3>
                        <h4 className="text-gray-300 mb-2">{email}</h4>
                        <p className="mb-2 text-gray-400">{districtName} | {countryName}</p>
                        <p className="mb-2 text-gray-400">Last donation date: {lastDonationDate}</p>


                        <button className=''>
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Send Message</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donor;