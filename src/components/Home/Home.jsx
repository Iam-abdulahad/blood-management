import MainAbout from "../About/mainAbout";
import TsParticles2 from "../Background/TsParticles2";
import Contact from "../Contact/Contact";
import HomeFaq from "../FAQ/HomeFaq";
import Teams from "../OurTeam/Teams";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <TsParticles2></TsParticles2>
            <Banner></Banner>
            <MainAbout></MainAbout>
            <Teams></Teams>
            <HomeFaq></HomeFaq>
            <Contact></Contact>
        </div>
    );
};

export default Home;