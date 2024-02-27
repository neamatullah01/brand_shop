import Banner from "../../Components/Banner";
import Brands from "../../Components/Brands";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import TeamMember from "../../Components/TeamMember";

const Home = () => {
    return (
        <div className="bg-[#ACA6A680]">
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Brands></Brands>
            </div>
            <div>
                <TeamMember></TeamMember>
            </div>
            <div>
                <Contact></Contact>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;