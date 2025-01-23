import React from "react";
import Card from "./Card";

const View = () => {
  return (
    <>
      <section className="container pt-5">
        <h2 className="text-start mb-2" id="cac-section">
          Find Services that interest you
        </h2>
        <p className=" fs-5">
          We are simplifying access to essential business services and
          solutions. <b>Alakeys</b> redefining the ways of doing business in
          Nigeria.
        </p>
        <div className="row pt-5">
          <div className=" col-lg-4 col-md-6 mb-4">
            <Card
              title={"Registration & Formation of Companies"}
              description={`We are committed to making the process of registering and
                  forming companies seamless and hassle-free. With a team of
                  dedicated professionals, we guide entrepreneurs, startups, and
                  established businesses through every step of the legal and
                  administrative processes involved in setting up a company.`}
              link={"/service/cac"}
            />
          </div>
          <div className=" col-lg-4 col-md-6 mb-4">
            <Card
              title={"Tax"}
              description={`We provide comprehensive Tax Registration and Returns services
          designed to help individuals and businesses navigate the complexities
          of tax compliance. With a team of skilled tax professionals, we ensure
          that your tax obligations are handled accurately and efficiently,
          minimizing risks and maximizing opportunities for tax savings.`}
              link={"/service/tax"}
            />
          </div>
          <div className=" col-lg-4 col-md-6 mb-4">
            <Card
              title={"Financial Accounting Services"}
              description={`We are committed to delivering expert Financial Accounting Services
          that help businesses stay financially healthy and compliant with
          regulatory requirements. With a team of qualified accountants and
          financial professionals, we provide accurate and timely financial
          reporting, bookkeeping, and advisory services that empower businesses
          to make informed decisions. `}
              link={"/service/accounting"}
            />
          </div>
          <div className=" col-lg-4 col-md-6 mb-4">
            <Card
              title={"   Auditing"}
              description={`          We specialize in providing comprehensive Auditing Services designed to
          offer transparency, accuracy, and assurance to businesses and
          organizations. With a team of experienced auditors and financial
          experts, we help companies maintain trust with stakeholders by
          ensuring that their financial statements are accurate and compliant
          with regulatory standards.`}
              link={"/service/auditing"}
            />
          </div>
          <div className=" col-lg-4 col-md-6 mb-4">
            <Card
              title={"Recruitment"}
              description={`We provide innovative and flexible Recruitment Solutions to help
          businesses find the right talent quickly and efficiently. Our
          expertise lies in offering both DIY Recruitment services, empowering
          companies to take control of their hiring processes, and Talent Pool
          Recruitment, giving you access to a curated pool of pre-qualified
          candidates ready to meet your specific needs.`}
              link={"/service/recruitment"}
            />
          </div>
          <div className=" col-lg-4 col-md-6 mb-4">
            <Card
              title={"Training & Development"}
              description={`          We are dedicated to equipping professionals and businesses with the
          skills and knowledge they need to excel in Business Analysis. Our
          comprehensive training programs are designed to provide both aspiring
          and experienced business analysts with the tools, techniques, and
          methodologies necessary to succeed in today's competitive business
          environment.`}
              link={"/service/training"}
            />
          </div>
          <div className=" col-lg-4 col-md-6 mb-4">
            <Card
              title={"Website Design & Development"}
              description={`     We specialize in creating high-quality, professional Corporate
          Websites and e-Commerce Websites that help businesses stand out in the
          digital landscape. Our team of experienced designers and developers is
          dedicated to delivering innovative web solutions tailored to meet your
          unique business needs.`}
              link={"/service/web"}
            />
          </div>
        </div>
      </section>
      {""}
      {""}
      <section className="py-5 bg-light container">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <h4 className="text-center mb-5 text-black">
            At Alakeys, we understand that choosing a service provider is a
            crucial decision for your business. Here are several compelling
            reasons why partnering with us will benefit your organization:
          </h4>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title secondary-text-color">
                    1. Expertise Across Multiple Domains
                  </h5>
                  <p className="card-text">
                    Our team consists of industry professionals with extensive
                    experience in various fields, including consulting,
                    auditing, tax services, financial accounting, and more. We
                    bring specialized knowledge and insights to each service we
                    offer, ensuring you receive top-notch guidance and support
                    tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title secondary-text-color">
                    2. Customized Solutions
                  </h5>
                  <p className="card-text">
                    We recognize that every business is unique. Our approach
                    involves understanding your specific goals and challenges to
                    provide personalized solutions that align with your
                    objectives. Whether it's tailored training in business
                    analysis, customized website design, or bespoke recruitment
                    strategies, we adapt our services to meet your requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title secondary-text-color">
                    3. Comprehensive Service Offering
                  </h5>
                  <p className="card-text">
                    From company formation and registration to financial
                    accounting and recruitment, we offer a full suite of
                    services that cover all aspects of business operations. This
                    holistic approach allows you to streamline processes and
                    enjoy seamless collaboration across multiple functions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title secondary-text-color">
                    4. Commitment to Quality
                  </h5>
                  <p className="card-text">
                    We are dedicated to delivering high-quality services that
                    meet or exceed industry standards. Our rigorous quality
                    control measures ensure that every project we undertake is
                    executed with precision and care, providing you with peace
                    of mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title secondary-text-color">
                    5. Timely and Reliable Support
                  </h5>
                  <p className="card-text">
                    We value your time and understand the importance of meeting
                    deadlines. Our team is committed to delivering timely
                    results and maintaining open lines of communication
                    throughout the process. You can rely on us to keep you
                    informed and updated at every stage.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title secondary-text-color">
                    6. Cost-Effective Solutions
                  </h5>
                  <p className="card-text">
                    We offer competitive pricing structures without compromising
                    quality. Our transparent pricing ensures there are no hidden
                    fees, allowing you to budget effectively and get the best
                    value for your investment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title secondary-text-color">
                    7. Client-Centric Approach
                  </h5>
                  <p className="card-text">
                    Your satisfaction is our priority. We pride ourselves on
                    building long-term relationships with our clients by
                    providing exceptional service and support. We listen to your
                    feedback and continuously strive to improve our offerings
                    based on your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title secondary-text-color">
                    8. Up-to-Date Knowledge
                  </h5>
                  <p className="card-text">
                    Our team stays current with the latest industry trends,
                    regulations, and technologies. This ensures that you receive
                    the most relevant and effective solutions that can adapt to
                    changing market conditions and compliance requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 mx-auto">
              <div className="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 className="card-title secondary-text-color">
                    9. Holistic Business Partnership
                  </h5>
                  <p className="card-text">
                    We aim to be more than just a service provider; we aspire to
                    be your strategic partner in growth. By understanding your
                    business vision and goals, we can provide insights and
                    recommendations that support your long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default View;
