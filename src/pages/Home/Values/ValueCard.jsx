
const ValueCard = ({ valuesInfo }) => {
    const { img, title, desc } = valuesInfo;
    return (
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="box">
                <img src={img} className="img-fluid" alt="" />
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default ValueCard;