import "./Banner.css";
import Blood_2 from "../../assets/blood-2.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div>
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-red-600 dark:text-red-400">
              BloodCare BANGLADESH
            </h1>
            <h2 className="title-font sm:text-4xl text-2xl mb-6 font-semibold text-gray-800 dark:text-gray-300">
              A blood management organization
            </h2>
          </div>
          <p className="mb-8 leading-relaxed font-medium text-gray-700 dark:text-gray-400">
            At LifeSavers Blood Management Foundation, our mission is to ensure
            the safe, efficient, and sustainable utilization of blood resources
            to save lives and improve healthcare outcomes. Founded with a vision
            of a world where no one suffers due to blood shortages or wastage,
            we have dedicated ourselves to managing this vital resource with
            precision, compassion, and innovation.
          </p>
          <div className="flex justify-center">
            <Link
              to="/about_us"
              className="inline-flex items-center text-white bg-red-600 dark:bg-red-500 hover:bg-red-700 dark:hover:bg-red-600 transition-colors duration-300 py-2 px-6 rounded text-lg font-semibold"
            >
              KNOW MORE
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="bannerImg object-cover object-center rounded-lg shadow-md"
            alt="hero"
            src={Blood_2}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
