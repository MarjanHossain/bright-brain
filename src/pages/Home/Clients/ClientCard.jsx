
const ClientCard = ({ clientInfo }) => {
    const { img } = clientInfo;
    return (
        <div className="swiper-slide"><img src={img} className="img-fluid" alt="" /></div>
    );
};

export default ClientCard;