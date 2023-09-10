
const PricingCard = ({ pricingInfo }) => {
    const { spanTitle, spanTitleStyle, style, price, title, img, listStyle } = pricingInfo;
    return (
        <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="box">
                <span className={spanTitleStyle}>{spanTitle}</span>
                <h3 style={{ color: { style } }}>{title}</h3>
                <div className="price"><sup>$</sup>{price}<span> / mo</span></div>
                <img src={img} className="img-fluid" alt="" />
                <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li className={listStyle}>Massa ultricies mi</li>
                </ul>
                <a href="#" className="btn-buy">Buy Now</a>
            </div>
        </div>
    );
};

export default PricingCard;