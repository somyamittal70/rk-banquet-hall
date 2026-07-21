import AboutHero from "../components/about/Hero";
import AboutPillars from "../components/about/Pillars";
import AboutStory from "../components/about/Story";
import AboutSpecs from "../components/about/Specs";
import AboutJourney from "../components/about/Journey";
import OurTeam from "../components/about/OurTeam";

export default function AboutPage() {
    return(
        <>
        <AboutHero />
        <AboutStory />
        <AboutPillars />
        <AboutSpecs />
        <AboutJourney />
        <OurTeam/>
        </>
    )
}