import Card from "./ImageCard";

export default function NeedSomething2() {
  const cardsData = [
    {
      image:
        "https://wp.sfdcdigital.com/en-gb/wp-content/uploads/sites/16/2024/10/OG-Image-Agentforce-Teaser-Page-1.webp?w=1024",
      title: "CAC Service",
      link: "/service/cac",
    },
    {
      image:
        "https://wp.sfdcdigital.com/en-gb/wp-content/uploads/sites/16/2024/09/n-up-sales-report.webp?w=1024",
      title: "Recruitment",
      link: "/service/recruitment",
    },
    {
      image:
        "https://wp.sfdcdigital.com/en-gb/wp-content/uploads/sites/16/2024/09/n-up-salesforce-starter-suite.webp?w=1024",
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
                  Simplified access to services by Alakeys
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
