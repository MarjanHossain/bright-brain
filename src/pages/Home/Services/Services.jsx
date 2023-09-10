import { servicesData } from "../../../assets/data";
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <section id="services" className="services">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Services</h2>
                    <p>Veritatis et dolores facere numquam et praesentium</p>
                </header>

                <div className="row gy-4">

                    {
                        servicesData.map((serviceInfo, i) => <ServiceCard key={i} serviceInfo={serviceInfo} />)
                    }

                </div>

            </div>

        </section>
    );
};

export default Services;