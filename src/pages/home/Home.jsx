import Common from "@/common/Common";
import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Common />
        </>
    );
};

export default Home;
