import About from "./About";
import Blogs from "./Blogs/Blogs";
import Clients from "./Clients/Clients";
import ContactForm from "./ContactForm/ContactForm";
import Counts from "./Counts/Counts";
import FAQ from "./FAQ/FAQ";
import Features from "./Features/Features";
import Hero from "./Hero";
import Portfolio from "./Portfolio/Portfolio";
import Pricing from "./Pricing/Pricing";
import Services from "./Services/Services";
import Team from "./Teams/Team";
import Testimonials from "./Testimonials/Testimonials";
import Values from "./Values/Values";

const Home = () => {

    return (
        <>
            <Hero />
            <About />
            <Values />
            <Counts />
            <Features />
            <Services />
            <Pricing />
            <FAQ />
            <Portfolio />
            <Testimonials />
            <Team />
            <Clients />
            <Blogs />
            <ContactForm />
        </>
    );
};

export default Home;