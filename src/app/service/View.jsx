import React from "react";

const View = () => {
  return (
    <>
      <section class="py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-4">Why Choose Us?</h2>
          <p class="text-center mb-5">
            At Alakeys, we understand that choosing a service provider is a
            crucial decision for your business. Here are several compelling
            reasons why partnering with us will benefit your organization:
          </p>
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">
                    1. Expertise Across Multiple Domains
                  </h5>
                  <p class="card-text">
                    Our team consists of industry professionals with extensive
                    experience in consulting, auditing, tax services, financial
                    accounting, and more. We provide specialized knowledge
                    tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">2. Customized Solutions</h5>
                  <p class="card-text">
                    We recognize that every business is unique and offer
                    personalized solutions tailored to your specific goals and
                    challenges.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">3. Comprehensive Service Offering</h5>
                  <p class="card-text">
                    From company formation to financial accounting and
                    recruitment, we provide a full suite of services for
                    seamless collaboration.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">4. Commitment to Quality</h5>
                  <p class="card-text">
                    We ensure high-quality services that meet or exceed industry
                    standards with rigorous quality control measures.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">5. Timely and Reliable Support</h5>
                  <p class="card-text">
                    We value your time and deliver timely results while
                    maintaining open communication throughout the process.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">6. Cost-Effective Solutions</h5>
                  <p class="card-text">
                    We offer competitive pricing without compromising quality,
                    ensuring transparent and budget-friendly services.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">7. Client-Centric Approach</h5>
                  <p class="card-text">
                    Your satisfaction is our priority. We build long-term
                    relationships and continuously improve based on your
                    feedback.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">8. Up-to-Date Knowledge</h5>
                  <p class="card-text">
                    We stay current with industry trends and technologies to
                    provide relevant and effective solutions.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4 mx-auto">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">9. Holistic Business Partnership</h5>
                  <p class="card-text">
                    We aspire to be your strategic partner by understanding your
                    business vision and providing insights for long-term
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-5">
        <h2 className="text-center mb-5">Service Categories</h2>
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
    </>
  );
};

export default View;
