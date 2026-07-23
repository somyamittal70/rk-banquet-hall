import ContactForm from "../components/contact/Form";
import ContactHero from "../components/contact/Hero";
import ContactMap from "../components/contact/Map";
import FAQ from "../components/contact/FAQ";


export default function ContactPage() {
    return(
        <>
        <ContactHero />
        <ContactForm />
        <FAQ/>
        <ContactMap />
        </>
    )
}