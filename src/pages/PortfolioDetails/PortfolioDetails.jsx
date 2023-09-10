import { Link } from "react-router-dom";
import { portfolio1, portfolio2, portfolio3 } from "../../assets/image";

const PortfolioDetails = () => {
    return (
        <section>
            {/* -- ======= Breadcrumbs ======= -- */}
            <div className="breadcrumbs" style={{ marginTop: '40px' }}>
                <div className="container">

                    <ol>
                        <li><Link to="/" className="text-decoration-underline">Home</Link></li>
                        {/* <li>Portfolio Details</li> */}
                    </ol>
                    <h2>Portfolio Details</h2>

                </div>
            </div>

            {/* //? Portfolio-Details */}
            <div id="portfolio-details" className="portfolio-details">
                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-8">
                            <div className="portfolio-details-slider swiper">
                                <div className="swiper-wrapper align-items-center">

                                    <div className="swiper-slide">
                                        <img src={portfolio1} alt="" />
                                    </div>

                                    <div className="swiper-slide">
                                        <img src={portfolio2} alt="" />
                                    </div>

                                    <div className="swiper-slide">
                                        <img src={portfolio3} alt="" />
                                    </div>

                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="portfolio-info">
                                <h3>Project information</h3>
                                <ul>
                                    <li><strong>Category</strong>: Web design</li>
                                    <li><strong>Client</strong>: ASU Company</li>
                                    <li><strong>Project date</strong>: 01 March, 2020</li>
                                    <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                                </ul>
                            </div>
                            <div className="portfolio-description">
                                <h2>This is an example of portfolio detail</h2>
                                <p>
                                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default PortfolioDetails;