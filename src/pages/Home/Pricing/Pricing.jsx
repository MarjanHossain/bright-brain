import { pricingData } from "../../../assets/data";
import PricingCard from "./PricingCard";

const Pricing = () => {

    return (
        <section id="pricing" className="pricing">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Pricing</h2>
                    <p>Check our Pricing</p>
                </header>

                <div className="row gy-4" data-aos="fade-left">

                    {
                        pricingData.map((pricingInfo, i) => <PricingCard key={i} pricingInfo={pricingInfo} />)
                    }

                </div>

            </div>

        </section>
    );
};

export default Pricing;