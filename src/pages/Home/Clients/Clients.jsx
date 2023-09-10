import { clientsData } from "../../../assets/data";
import { client1, client2, client3, client4, client5, client6, client7, client8 } from "../../../assets/image";
import ClientCard from "./ClientCard";

const Clients = () => {
    return (
        <section id="clients" className="clients">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Our Clients</h2>
                    <p>Temporibus omnis officia</p>
                </header>

                <div className="clients-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                        {
                            clientsData.map((clientInfo, i) => <ClientCard key={i} clientInfo={clientInfo} />)
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>

        </section>
    );
};

export default Clients;