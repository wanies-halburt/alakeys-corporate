export default function ServiceDetailFaq1() {
  return (
    <>
      <div className="accordion-style1 faq-page mb-4 mb-lg-5 mt30">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item active">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                What methods of payments are supported?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                scelerisque volutpat nec sit vel donec. Sagittis, id volutpat
                erat vel.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Can I cancel at anytime?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                scelerisque volutpat nec sit vel donec. Sagittis, id volutpat
                erat vel.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                How do I get a receipt for my purchase?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                scelerisque volutpat nec sit vel donec. Sagittis, id volutpat
                erat vel.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
