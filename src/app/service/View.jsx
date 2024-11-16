import React from "react";

const View = () => {
  return (
    <section className="container pt-5">
      <h2 className="text-center mb-5 primary-text-color">
        Service Categories
      </h2>

      <div className="row">
        {/* Consulting Card */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Consulting</h3>
              <p className="card-text">
                Our consulting services provide strategic guidance to support
                business growth, compliance, and technical needs.
              </p>
              <h5 className="mt-4">Key Services:</h5>
              <ul>
                <li>Registration & Formation of Companies</li>
                <li>Company Annual Returns</li>
                <li>Tax Registration and Returns</li>
                <li>Financial Accounting & Auditing</li>
                <li>CAC Services</li>
                <li>Website Design (Corporate & Ecommerce)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recruitment Card */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Recruitment</h3>
              <p className="card-text">
                Find the right talent for your business with our tailored
                recruitment solutions.
              </p>
              <h5 className="mt-4">Options:</h5>
              <ul>
                <li>
                  <strong>DIY Recruitment:</strong> Tools and resources for
                  businesses to handle recruitment in-house.
                </li>
                <li>
                  <strong>Talent Pool Recruitment:</strong> Access our curated
                  talent pool for efficient hiring.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Training Card */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Training</h3>
              <p className="card-text">
                Empower your team with our targeted training programs, focused
                on technical and business skills.
              </p>
              <h5 className="mt-4">Programs Offered:</h5>
              <ul>
                <li>Business Analysis</li>
                <li>
                  Technical Skills: Practical, hands-on training in essential
                  tech skills.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default View;
