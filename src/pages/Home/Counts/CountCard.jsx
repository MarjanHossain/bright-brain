
const CountCard = ({ countInfo }) => {
    const { icon, count, title, color } = countInfo;
    return (
        <div className="col-lg-3 col-md-6">
            <div className="count-box">
                <i style={color && { color }} className={icon}></i>
                <div>
                    <span data-purecounter-start="0" data-purecounter-end={count} data-purecounter-duration="1" className="purecounter"></span>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default CountCard;