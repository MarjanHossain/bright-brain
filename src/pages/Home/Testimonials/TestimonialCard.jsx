
const TestimonialCard = ({ testimonialInfo }) => {
    const { disc, img, name, title } = testimonialInfo;
    return (
        <div className="swiper-slide">
            <div className="testimonial-item">
                <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                    {disc}
                </p>
                <div className="profile mt-auto">
                    <img src={img} className="testimonial-img" alt="" />
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;