import { valuesData } from "../../../assets/data";
import ValueCard from "./ValueCard";

const Values = () => {
    return (
        <section id="values" className="values">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Our Values</h2>
                    <p>Odit est perspiciatis laborum et dicta</p>
                </header>

                <div className="row">

                    {valuesData.map((valuesInfo, i) => <ValueCard valuesInfo={valuesInfo} key={i} />)}

                </div>

            </div>

        </section>
    );
};

export default Values;