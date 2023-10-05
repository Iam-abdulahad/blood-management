import MainAbout from "../About/mainAbout";
import TsParticles2 from "../Background/TsParticles2";
import OurTeam from "../OurTeam/OurTeam";
import Banner from "./Banner";
import HomeFaq from "./HomeFaq";

const Home = () => {
    return (
        <div>
            <TsParticles2></TsParticles2>
            <Banner></Banner>
            <MainAbout></MainAbout>
            <OurTeam></OurTeam>
            <HomeFaq></HomeFaq>
        </div>
    );
};

export default Home;