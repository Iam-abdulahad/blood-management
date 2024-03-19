
import BannerImg from '../../assets/DP/banner.jpg';

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

                        <button className="flex items-center space-x-1 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 2L11 13"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 2L15 22 11 13 2 9 22 2z"></path>
                            </svg>
                            <span>Send Message</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donor;