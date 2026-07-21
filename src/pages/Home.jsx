import About from "../components/home/About";
import Gallery from "../components/home/Gallery";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUS";

export default function HomePage() {
    return(
        <>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <WhyChooseUs />
        </>
    )
}