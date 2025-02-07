import Card from "./ImageCard";

export default function NeedSomething2() {
  const cardsData = [
    {
      image: "/images/cac_service.jpg",
      title: "CAC Service",
      link: "/service/cac",
    },
    {
      image: "/images/Recruitment.jpg",
      title: "Recruitment",
      link: "/service/recruitment",
    },
    {
      image: "/images/financial_accounting.png",
      title: "Financial Accounting",
      link: "/service/accounting",
    },
  ];

  return (
    <>
      <section className="our-features pb90 pb30-md pt60">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title">
                <h2 className="primary-text-color d-flex align-content-center fs-1 justify-content-center">
                  Access to essential services made simply by Alakeys
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {cardsData.map((card, index) => (
              <div key={index} className="col-12 col-md-4 mb-4">
                <Card image={card.image} title={card.title} link={card.link} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
