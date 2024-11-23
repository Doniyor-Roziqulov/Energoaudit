import Common from "@/common/Common";
import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Use from "@/components/use/Use";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            {/* <Services /> */}
            {/* <Common /> */}
            <Use/>
        </>
    );
};

export default Home;
