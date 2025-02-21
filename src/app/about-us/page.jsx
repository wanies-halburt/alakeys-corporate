import Image from "next/image";
import AboutImage from "../../../public/images/about/about-us.webp";

export const metadata = {
  title: "Alakeys - Learn all about alakeyes",
};

const Page = () => {
  return (
    <div className="row pt-60 pb-5">
      <header className="position-relative">
        <div className="w-100" style={{ height: "70vh", overflow: "hidden" }}>
          <Image
            src={AboutImage}
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
            marketplace.
            <br />
            Our approach combines strategic insights with practical, hands-on
            experience to ensure that our clients achieve their business
            objectives. We work closely with you to understand your challenges,
            identify opportunities, and implement strategies that drive
            measurable results.
            <br />
            We work in collaboration with our partners to ensure you get value
            for money for your outsourced business activities with us.
          </p>
          {/* <h3>Our Services</h3>
          <p>
            <span className=" fw-bold">
              Registration & Formation of Companies:
            </span>{" "}
            We simplify company registration and formation, guiding
            entrepreneurs, startups, and businesses through every legal and
            administrative step. Our dedicated team ensures a seamless process,
            addressing challenges and ensuring compliance with local and
            international regulations.
            <br />
            <span className=" fw-semibold">Services include:</span>
            <ul className=" fs-6">
              <li>
                <span className=" fw-semibold">Company Registration:</span>
                We assist with the entire registration process, guiding you from
                selecting the right business structure to filing essential
                documents with the relevant authorities.
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
            streamline the filing of Company Annual Returns, ensuring businesses
            of all sizes stay compliant with regulatory requirements. Our expert
            team handles filings with precision and efficiency, allowing you to
            focus on growing your business while we ensure compliance with local
            laws.
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
            offer comprehensive Tax Registration and Returns services, helping
            individuals and businesses navigate tax compliance with accuracy and
            efficiency. Our skilled professionals provide tailored solutions,
            combining tax law expertise with a client-focused approach to
            minimize risks and maximize savings.
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
          <p>
            <span className=" fw-bold">Financial Accounting:</span> We deliver
            expert Financial Accounting Services to help businesses maintain
            financial health and regulatory compliance. Our qualified team
            offers accurate reporting, bookkeeping, and tailored advisory
            solutions, empowering clients to make informed decisions while
            ensuring their financial records are managed with precision and
            care.
            <br />
            <span className=" fw-semibold">What we offer</span>
            <ul className=" fs-6">
              <li>
                <span className=" fw-semibold">Bookkeeping:</span>
                We offer comprehensive bookkeeping services that ensure your
                financial transactions are recorded accurately and
                systematically, providing you with clear insights into your
                business’s financial health.
              </li>
              <li>
                <span className=" fw-semibold">Financial Reporting:</span>
                We prepare detailed financial statements, including balance
                sheets, income statements, and cash flow reports, to help you
                understand your financial position and comply with regulatory
                requirements.
              </li>
              <li>
                <span className=" fw-semibold">Payroll Services: </span>
                We manage payroll processes efficiently, ensuring that your
                employees are paid accurately and on time, while also handling
                tax deductions and reporting.
              </li>
              <li>
                <span className=" fw-semibold">
                  Financial Advisory Services:
                </span>
                Our team offers personalized financial advice to help you
                optimize your business operations, manage cash flow, and make
                sound investment decisions.
              </li>
            </ul>
          </p>
          <p>
            <span className=" fw-bold">Auditing:</span> We provide comprehensive
            Auditing Services to ensure transparency, accuracy, and compliance
            with regulatory standards. Our experienced auditors deliver tailored
            solutions to help businesses and organizations maintain stakeholder
            trust, improve internal controls, and enhance operational
            efficiency.
            <br />
            <span className=" fw-semibold">Our Services</span>
            <ul className=" fs-6">
              <li>
                <span className=" fw-semibold">
                  Financial Statement Audits:
                </span>
                We conduct thorough audits of your financial statements to
                ensure they provide a true and fair view of your financial
                position, in accordance with local and international accounting
                standards.
              </li>
              <li>
                <span className=" fw-semibold">Internal Audits:</span>
                Our internal audit services help you evaluate and improve the
                effectiveness of your internal controls, risk management, and
                governance processes.
              </li>
              <li>
                <span className=" fw-semibold">Compliance Audits: </span>
                We help businesses stay compliant with industry regulations and
                standards by conducting audits that ensure adherence to legal
                and regulatory requirements.
              </li>
              <li>
                <span className=" fw-semibold">Operational Audits:</span>
                We assess the efficiency and effectiveness of your business
                operations, helping you identify areas for improvement and
                optimization.
              </li>
              <li>
                <span className=" fw-semibold">Forensic Audits:</span>
                Our forensic audit services are designed to investigate and
                detect financial irregularities, fraud, or discrepancies within
                your organization.
              </li>
              <li>
                <span className=" fw-semibold">Tax Audits:</span>
                We assist businesses in preparing for tax audits and ensure that
                their financial records and tax filings are in full compliance
                with the relevant tax authorities.
              </li>
            </ul>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
