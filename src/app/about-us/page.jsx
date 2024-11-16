import Image from "next/image";

export const metadata = {
  title: "Alakeys - Learn all about alakeyes",
};

const Page = () => {
  return (
    <div className="row pt-60 pb-5">
      <header className="position-relative">
        <div className="w-100" style={{ height: "70vh", overflow: "hidden" }}>
          <Image
            src="/images/about/about-us.webp"
            layout="fill"
            objectFit="cover"
            alt="about us header"
          />
        </div>
        <div
          className="position-absolute top-50 start-0 translate-middle-y p-4 bg-white shadow rounded"
          style={{
            maxWidth: "600px",
            margin: "40px",
            borderTop: "4px solid red",
          }}
        >
          <h1 className="text-start mb-5 primary-text-color">About Us</h1>
          <p className="text-start mb-5 fs-5">
            At Alakeys, we are dedicated to empowering businesses by offering
            expert consulting services tailored to your unique needs.
          </p>
        </div>
      </header>

      <div className="row mt-4 mx-1">
        {/* Left Div */}
        <div className="col-12 col-md-3 col-lg-6 p-3">
          <h3 className=" text-black fs-2">
            The{" "}
            <span className=" secondary-text-color bg-light shadow">
              Alakeys
            </span>{" "}
            Story
          </h3>
        </div>

        {/* Right Div */}
        <div className="col-12 col-md-9 col-lg-6 p-3 text-white fs-5">
          <p>
            At Alakeys, we are dedicated to empowering businesses by offering
            expert consulting services tailored to your unique needs. With a
            team of experienced consultants across various industries, we
            provide innovative solutions that help companies grow, optimize
            their operations, and stay competitive in an ever-changing
            marketplace. Our approach combines strategic insights with
            practical, hands-on experience to ensure that our clients achieve
            their business objectives. We work closely with you to understand
            your challenges, identify opportunities, and implement strategies
            that drive measurable results.
          </p>
          <h3>Our Services</h3>
          <p>
            <span className=" fw-bold">
              Registration & Formation of Companies:
            </span>{" "}
            We are committed to making the process of registering and forming
            companies seamless and hassle-free. With a team of dedicated
            professionals, we guide entrepreneurs, startups, and established
            businesses through every step of the legal and administrative
            processes involved in setting up a company. We understand the
            challenges and complexities that come with company formation,
            whether you're a first-time entrepreneur or expanding your business
            ventures. Our goal is to simplify this journey, ensuring that your
            company is set up efficiently and in full compliance with local and
            international regulations.
            <br />
            <span className=" fw-semibold">Services include:</span>
            <ul className=" fs-6">
              <li>
                <span className=" fw-semibold">Company Registration:</span>
                We assist with the entire registration process, from choosing
                the right business structure to filing necessary documents with
                the relevant authorities.
              </li>
              <li>
                <span className=" fw-semibold">
                  Business Name Registration:
                </span>
                We help you secure your desired business name, ensuring it
                complies with local naming regulations.
              </li>
              <li>
                <span className=" fw-semibold">
                  Legal Compliance and Documentation:
                </span>
                Our experts ensure that all legal documentation is prepared and
                filed accurately, from articles of incorporation to tax
                registration.
              </li>
              <li>
                <span className=" fw-semibold">Consultation Services:</span>
                We offer personalized consultations to help you understand the
                best strategies for your business, including tax considerations
                and legal obligations.
              </li>
            </ul>
          </p>
          <p>
            <span className=" fw-bold">Company Annual Returns:</span> We
            specialize in simplifying the process of filing Company Annual
            Returns, ensuring your business remains compliant with regulatory
            requirements. With a deep understanding of corporate governance and
            statutory obligations, we help businesses of all sizes stay up to
            date with their annual filings, allowing you to focus on what you do
            best—growing your business. Our dedicated team is committed to
            providing timely and accurate services, making sure that all
            necessary documents are filed in accordance with local laws and
            regulations. We take pride in our attention to detail, efficiency,
            and personalized approach, offering peace of mind to business owners
            and corporate entities.
            <br />
            <span className=" fw-semibold">What we offer</span>
            <ul className=" fs-6">
              <li>
                <span className=" fw-semibold">
                  Preparation and Filing of Annual Returns:{" "}
                </span>
                We handle the preparation and submission of your company’s
                annual returns, ensuring all the required information is
                accurate and filed within the deadlines.
              </li>
              <li>
                <span className=" fw-semibold">Compliance Monitoring:</span>
                Our team keeps track of filing deadlines and updates, so you
                never miss an important date or face penalties.
              </li>
              <li>
                <span className=" fw-semibold">Document Management:</span>
                We assist in gathering and organizing the necessary
                documentation, such as financial statements, shareholder
                records, and director details.
              </li>
              <li>
                <span className=" fw-semibold">Advisory Services:</span>
                Our experts provide consultations on compliance issues and help
                you stay informed of any changes in regulations that may impact
                your company.
              </li>
            </ul>
          </p>
          <p>
            <span className=" fw-bold">Tax Registration and Returns:</span> We
            provide comprehensive Tax Registration and Returns services designed
            to help individuals and businesses navigate the complexities of tax
            compliance. With a team of skilled tax professionals, we ensure that
            your tax obligations are handled accurately and efficiently,
            minimizing risks and maximizing opportunities for tax savings.
            Whether you’re a small business, a growing enterprise, or an
            individual seeking personal tax assistance, we offer tailored
            solutions to meet your needs. Our approach combines deep expertise
            in tax law with a client-centered focus, making sure you receive the
            best advice and services for your specific situation.
            <br />
            <span className=" fw-semibold">What we offer</span>
            <ul className=" fs-6">
              <li>
                <span className=" fw-semibold">Tax Registration Services:</span>
                We assist businesses and individuals in registering with the
                relevant tax authorities, ensuring all necessary steps are
                completed and that you’re compliant from the start.
              </li>
              <li>
                <span className=" fw-semibold">
                  Preparation and Filing of Tax Returns:
                </span>
                We prepare and file your tax returns accurately and on time,
                whether for corporate, personal, or VAT returns. Our team keeps
                track of filing deadlines and updates in tax laws so you never
                have to worry about missing a deadline or facing penalties.
              </li>
              <li>
                <span className=" fw-semibold">Tax Planning and Advisory:</span>
                We offer expert tax planning services, helping you minimize your
                tax liabilities through effective strategies while staying fully
                compliant with all legal requirements.
              </li>
              <li>
                <span className=" fw-semibold">Tax Compliance Monitoring:</span>
                Our services include ongoing compliance monitoring, making sure
                you meet all tax obligations throughout the year.
              </li>
              <li>
                <span className=" fw-semibold"> Tax Dispute Resolution:</span>
                Should you face any tax disputes or audits, our experienced team
                will represent you and provide expert advice to resolve the
                issues swiftly and favorably.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
