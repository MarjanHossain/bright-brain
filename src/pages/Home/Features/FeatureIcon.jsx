
const FeatureIcon = ({ fIconInfo }) => {
    const { icon, title, desc } = fIconInfo;
    return (
        <div className="col-md-6 icon-box" data-aos="fade-up">
            <i className={icon}></i>
            <div>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default FeatureIcon;