
const TeamCard = ({ teamInfo }) => {
    const { img, name, role, desc } = teamInfo;
    return (
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
                <div className="member-img">
                    <img src={img} className="img-fluid" alt="" />
                    <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                    <h4>{name}</h4>
                    <span>{role}</span>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;