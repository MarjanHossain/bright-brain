
const FAQInfo = ({ faqInfo }) => {
    const { title, disc, accordionId, bsParentId, bsTargetId } = faqInfo;
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={bsTargetId}>
                    {title}
                </button>
            </h2>
            <div id={accordionId} className="accordion-collapse collapse" data-bs-parent={bsParentId}>
                <div className="accordion-body">
                    {disc}
                </div>
            </div>
        </div>
    );
};

export default FAQInfo;