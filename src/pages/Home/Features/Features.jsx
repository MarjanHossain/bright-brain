import { featuresData, featuresIconData } from "../../../assets/data";
import { features, features2, features3 } from "../../../assets/image";
import FeatureCard from "./FeatureCard";
import FeatureIcon from "./FeatureIcon";
import FeatureTab from "./FeatureTab";

const Features = () => {
    const featureTab = ['tab1, tab2, tab3'];
    return (
        <section id="features" className="features">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Features</h2>
                    <p>Laboriosam et omnis fuga quis dolor direda fara</p>
                </header>

                <div className="row">

                    <div className="col-lg-6">
                        <img src={features} className="img-fluid" alt="" />
                    </div>

                    {/*//* Features Card */}
                    <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                        <div className="row align-self-center gy-4">

                            {featuresData.map((feature, i) => <FeatureCard key={i} feature={feature} />)}

                        </div>
                    </div>

                </div>
                {/* <!-- / row --> */}


                {/* <!-- Feature Tabs --> */}
                <div className="row feture-tabs" data-aos="fade-up">
                    <div className="col-lg-6">
                        <h3>Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h3>


                        {/* <!-- Tabs --> */}
                        <ul className="nav nav-pills mb-3">
                            <li>
                                <a className="nav-link active" data-bs-toggle="pill" href="#tab1">Saepe fuga</a>
                            </li>
                            <li>
                                <a className="nav-link" data-bs-toggle="pill" href="#tab2">Voluptates</a>
                            </li>
                            <li>
                                <a className="nav-link" data-bs-toggle="pill" href="#tab3">Corrupti</a>
                            </li>
                        </ul>
                        {/* <!-- End Tabs --> */}


                        {/* <!-- Tab Content --> */}
                        <div className="tab-content">
                            {
                                featureTab.map((tab, i) => <FeatureTab key={i} tab={tab} />)
                            }


                        </div>

                    </div>

                    <div className="col-lg-6">
                        <img src={features2} className="img-fluid" alt="" />
                    </div>

                </div>
                {/* <!-- End Feature Tabs --> */}


                {/* <!-- Feature Icons --> */}
                <div className="row feature-icons" data-aos="fade-up">
                    <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>

                    <div className="row">

                        <div className="col-xl-4 text-center" data-aos="fade-right" data-aos-delay="100">
                            <img src={features3} className="img-fluid p-4" alt="" />
                        </div>

                        <div className="col-xl-8 d-flex content">
                            <div className="row align-self-center gy-4">

                                {featuresIconData.map((fIconInfo, i) => <FeatureIcon key={i} fIconInfo={fIconInfo} />)}

                            </div>
                        </div>

                    </div>

                </div>
                {/* <!-- End Feature Icons --> */}

            </div>

        </section>
    );
};

export default Features;