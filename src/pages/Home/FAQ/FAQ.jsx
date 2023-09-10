import { FAQList1, FAQList2 } from "../../../assets/data";
import FAQInfo from "./FAQInfo";

const FAQ = () => {
    return (
        <section id="faq" className="faq">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>F.A.Q</h2>
                    <p>Frequently Asked Questions</p>
                </header>
                {/* {
                    FAQList1.map((data, i) => <FAQInfo key={i} FAQDatas={data} />)
                } */}

                <div className="row">
                    <div className="col-lg-6">

                        {/* <!-- F.A.Q List 1--> */}
                        <div className="accordion accordion-flush" id="faqlist1">
                            {
                                FAQList1.map((faqInfo, i) => <FAQInfo key={i} faqInfo={faqInfo} />)
                            }

                        </div>
                    </div>

                    <div className="col-lg-6">


                        {/* <!-- F.A.Q List 2--> */}
                        <div className="accordion accordion-flush" id="faqlist2">

                            {
                                FAQList2.map((faqInfo, i) => <FAQInfo key={i} faqInfo={faqInfo} />)
                            }

                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default FAQ;