
const ServiceCard = ({ serviceInfo }) => {
    const { styleClass, title, disc } = serviceInfo;
    return (
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className={styleClass}>
                <i className="ri-discuss-line icon"></i>
                <h3>{title}</h3>
                <p>{disc}</p>
                <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
        </div>
    );
};

export default ServiceCard;