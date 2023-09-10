import { contactData } from "../../../assets/data";
import ContactFormCard from "./ContactFormCard";

const ContactForm = () => {
    return (
        <section id="contact" className="contact">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Contact</h2>
                    <p>Contact Us</p>
                </header>

                <div className="row gy-4">

                    <div className="col-lg-6">

                        <div className="row gy-4">
                            {
                                contactData.map((contactInfo, i) => <ContactFormCard key={i} contactInfo={contactInfo} />)
                            }
                        </div>

                    </div>

                    <div className="col-lg-6">
                        <form action="./forms/contact.php" method="post" className="php-email-form">
                            <div className="row gy-4">

                                <div className="col-md-6">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                </div>

                                <div className="col-md-6 ">
                                    <input type="email" className="form-control" name="email" placeholder="Your/ Email" required />
                                </div>

                                <div className="col-md-12">
                                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                </div>

                                <div className="col-md-12">
                                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                </div>

                                <div className="col-md-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>

                                    <button type="submit">Send Message</button>
                                </div>

                            </div>
                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ContactForm;