"use client";

import React, { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Page = () => {
  const predefinedProducts = [
    {
      img: "https://res.cloudinary.com/db4hf2hs6/image/upload/v1738853564/y0ow6odfaibgvlipky7a.jpg",
      category: "CAC Services",
      title: "Company Registration",
      price: 983,
      tag: "CAC Services",
      description: `    
       <div>
          <h3>
            Registration & Formation of Companies:
          </h3>
          <p>
            We are committed to making the process of registering and forming
            companies seamless and hassle-free. With a team of dedicated
            professionals, we guide entrepreneurs, startups, and established
            businesses through every step of the legal and administrative
            processes involved in setting up a company.
            <br />
            We understand the challenges and complexities that come with company
            formation, whether you're a first-time entrepreneur or expanding your
            business ventures. Our goal is to simplify this journey, ensuring that
            your company is set up efficiently and in full compliance with local
            and international regulations.
          </p>
          <p>Our services include:</p>
          <ul>
            <li>
              <h4>Company Registration:</h4>
              <p>
                We assist with the entire registration process, from choosing the
                right business structure to filing necessary documents with the
                relevant authorities.
              </p>
            </li>
            <li>
              <h4>Business Name Registration:</h4>
              <p>
                We help you secure your desired business name, ensuring it
                complies with local naming regulations.
              </p>
            </li>
            <li>
              <h4>Legal Compliance and Documentation:</h4>
              <p>
                Our experts ensure that all legal documentation is prepared and
                filed accurately, from articles of incorporation to tax
                registration.
              </p>
            </li>
            <li>
              <h4>Consultation Services:</h4>
              <p>
                We offer personalized consultations to help you understand the
                best strategies for your business, including tax considerations
                and legal obligations.
              </p>
            </li>
          </ul>
        </div>`,
    },
    {
      img: "https://res.cloudinary.com/db4hf2hs6/image/upload/v1738853510/jqrqqxtwvvqymackximt.jpg",
      category: "CAC Services",
      title: "Business Name Registration",
      price: 983,
      tag: "CAC Services",
      description: `    
       <div>
          <h3>
            Registration & Formation of Companies:
          </h3>
          <p>
            We are committed to making the process of registering and forming
            companies seamless and hassle-free. With a team of dedicated
            professionals, we guide entrepreneurs, startups, and established
            businesses through every step of the legal and administrative
            processes involved in setting up a company.
            <br />
            We understand the challenges and complexities that come with company
            formation, whether you're a first-time entrepreneur or expanding your
            business ventures. Our goal is to simplify this journey, ensuring that
            your company is set up efficiently and in full compliance with local
            and international regulations.
          </p>
          <p>Our services include:</p>
          <ul>
            <li>
              <h4>Company Registration:</h4>
              <p>
                We assist with the entire registration process, from choosing the
                right business structure to filing necessary documents with the
                relevant authorities.
              </p>
            </li>
            <li>
              <h4>Business Name Registration:</h4>
              <p>
                We help you secure your desired business name, ensuring it
                complies with local naming regulations.
              </p>
            </li>
            <li>
              <h4>Legal Compliance and Documentation:</h4>
              <p>
                Our experts ensure that all legal documentation is prepared and
                filed accurately, from articles of incorporation to tax
                registration.
              </p>
            </li>
            <li>
              <h4>Consultation Services:</h4>
              <p>
                We offer personalized consultations to help you understand the
                best strategies for your business, including tax considerations
                and legal obligations.
              </p>
            </li>
          </ul>
        </div>`,
    },
    {
      img: "https://res.cloudinary.com/db4hf2hs6/image/upload/v1738853491/mfn2i9oot1l3dgm55wjb.jpg",
      category: "CAC Services",
      title: "Annual Returns",
      price: 983,
      tag: "CAC Services",
      description: `     
      <div>
         <h3>Company Annual Returns:</h3>
         <p>
           We specialize in simplifying the process of filing Company Annual
           Returns, ensuring your business remains compliant with regulatory
           requirements. With a deep understanding of corporate governance and
           statutory obligations, we help businesses of all sizes stay up to date
           with their annual filings, allowing you to focus on what you do
           best—growing your business.
           <br />
           Our dedicated team is committed to providing timely and accurate
           services, making sure that all necessary documents are filed in
           accordance with local laws and regulations. We take pride in our
           attention to detail, efficiency, and personalized approach, offering
           peace of mind to business owners and corporate entities.
         </p>
         <p>What We Offer:</p>
         <ul>
           <li>
             <h4>
               Preparation and Filing of Annual Returns:
             </h4>
             <p>
               We handle the preparation and submission of your company’s annual
               returns, ensuring all the required information is accurate and
               filed within the deadlines.
             </p>
           </li>
           <li>
             <h4>Compliance Monitoring:</h4>
             <p>
               Our team keeps track of filing deadlines and updates, so you never
               miss an important date or face penalties.
             </p>
           </li>
           <li>
             <h4>Document Management:</h4>
             <p>
               We assist in gathering and organizing the necessary documentation,
               such as financial statements, shareholder records, and director
               details.
             </p>
           </li>
           <li>
             <h4>Advisory Services:</h4>
             <p>
               Our experts provide consultations on compliance issues and help
               you stay informed of any changes in regulations that may impact
               your company.
             </p>
           </li>
         </ul>
       </div>`,
    },
    {
      img: "https://res.cloudinary.com/db4hf2hs6/image/upload/v1738853978/rghqbyoqlvb2kjphhmmi.jpg",
      category: "CAC Services",
      title: "Incorporated Trustees",
      price: 983,
      tag: "CAC Services",
      description: `
                    <h4>Legal Compliance and Documentation:</h4>
              <p>
                Our experts ensure that all legal documentation is prepared and
                filed accurately, from articles of incorporation to tax
                registration.
              </p>`,
    },
    {
      img: "https://res.cloudinary.com/db4hf2hs6/image/upload/v1738853507/yuwzgyha4zzwqaelgdc0.png",
      category: "Tax",
      title: "Tax registration",
      price: 983,
      tag: "Tax",
      description: `
        <div>
      <h2>
      Tax
    </h2>
    <p>
      We provide comprehensive Tax Registration and Returns services designed to
      help individuals and businesses navigate the complexities of tax compliance.
      With a team of skilled tax professionals, we ensure that your tax
      obligations are handled accurately and efficiently, minimizing risks and
      maximizing opportunities for tax savings. Whether you’re a small business, a
      growing enterprise, or an individual seeking personal tax assistance, we
      offer tailored solutions to meet your needs. Our approach combines deep
      expertise in tax law with a client-centered focus, making sure you receive
      the best advice and services for your specific situation.
    </p>
    <p>What We Offer:</p>
    <ul>
      <li>
        <h4>Tax Registration Services:</h4>
        <p>
          We assist businesses and individuals in registering with the relevant
          tax authorities, ensuring all necessary steps are completed and that
          you’re compliant from the start.
        </p>
      </li>
      <li>
        <h4>Preparation and Filing of Tax Returns:</h4>
        <p>
          We prepare and file your tax returns accurately and on time, whether for
          corporate, personal, or VAT returns. Our team keeps track of filing
          deadlines and updates in tax laws so you never have to worry about
          missing a deadline or facing penalties.
        </p>
      </li>
      <li>
        <h4>Tax Planning and Advisory:</h4>
        <p>
          We offer expert tax planning services, helping you minimize your tax
          liabilities through effective strategies while staying fully compliant
          with all legal requirements.
        </p>
      </li>
      <li>
        <h4>Tax Compliance Monitoring:</h4>
        <p>
          Our services include ongoing compliance monitoring, making sure you meet
          all tax obligations throughout the year.
        </p>
      </li>
      <li>
        <h4>Tax Dispute Resolution:</h4>
        <p>
          Should you face any tax disputes or audits, our experienced team will
          represent you and provide expert advice to resolve the issues swiftly
          and favorably.
        </p>
      </li>
    </ul>
    </div>`,
    },
    {
      img: "https://res.cloudinary.com/db4hf2hs6/image/upload/v1738853560/q3dl9d22vbzposumuiy0.jpg",
      category: "Financial Accounting",
      title: "Financial Reporting",
      price: 983,
      tag: "Financial Accounting",
      description: `
      <div>
    <h2>
      Financial Accounting Services
    </h2>
    <p>
      We are committed to delivering expert Financial Accounting Services that
      help businesses stay financially healthy and compliant with regulatory
      requirements. With a team of qualified accountants and financial
      professionals, we provide accurate and timely financial reporting,
      bookkeeping, and advisory services that empower businesses to make informed
      decisions. <br /> We understand that managing finances can be complex and
      time-consuming, which is why we offer tailored accounting solutions designed
      to meet the unique needs of each client. Whether you’re a small business, a
      large corporation, or an individual seeking accounting assistance, we ensure
      that your financial records are managed with precision and care.
    </p>
    <p>What We Offer:</p>
    <ul>
      <li>
        <h4>Bookkeeping:</h4>
        <p>
          We offer comprehensive bookkeeping services that ensure your financial
          transactions are recorded accurately and systematically, providing you
          with clear insights into your business’s financial health.
        </p>
      </li>
      <li>
        <h4>Financial Reporting:</h4>
        <p>
          We prepare detailed financial statements, including balance sheets,
          income statements, and cash flow reports, to help you understand your
          financial position and comply with regulatory requirements.
        </p>
      </li>
      <li>
        <h4>Payroll Services:</h4>
        <p>
          We manage payroll processes efficiently, ensuring that your employees
          are paid accurately and on time, while also handling tax deductions and
          reporting.
        </p>
      </li>
      <li>
        <h4>Financial Advisory Services:</h4>
        <p>
          Our team offers personalized financial advice to help you optimize your
          business operations, manage cash flow, and make sound investment
          decisions.
        </p>
      </li>
    </ul>
    </div>`,
    },
    {
      img: "https://res.cloudinary.com/db4hf2hs6/image/upload/v1738853495/krbbuomm01yvvmhushby.png",
      category: "Auditing",
      title: "Financial auditing",
      price: 983,
      tag: "Auditing",
      description: `
          <div><h2>
      Auditing
    </h2>
    <p>
      We specialize in providing comprehensive Auditing Services designed to offer
      transparency, accuracy, and assurance to businesses and organizations. With
      a team of experienced auditors and financial experts, we help companies
      maintain trust with stakeholders by ensuring that their financial statements
      are accurate and compliant with regulatory standards.
      <br />
      Our audits are conducted with the highest level of integrity, combining
      industry expertise with a thorough understanding of regulatory requirements.
      Whether you're a small business, a large corporation, or a nonprofit
      organization, we provide tailored audit services to meet your specific
      needs, helping you improve internal controls and enhance operational
      efficiency.
    </p>
    <p>Our Services:</p>
    <ul>
      <li>
        <h4>Financial Statement Audits:</h4>
        <p>
          We conduct thorough audits of your financial statements to ensure they
          provide a true and fair view of your financial position, in accordance
          with local and international accounting standards.
        </p>
      </li>
      <li>
        <h4>Internal Audits:</h4>
        <p>
          Our internal audit services help you evaluate and improve the
          effectiveness of your internal controls, risk management, and governance
          processes.
        </p>
      </li>
      <li>
        <h4>Compliance Audits:</h4>
        <p>
          We help businesses stay compliant with industry regulations and
          standards by conducting audits that ensure adherence to legal and
          regulatory requirements.
        </p>
      </li>
      <li>
        <h4>Operational Audits:</h4>
        <p>
          We assess the efficiency and effectiveness of your business operations,
          helping you identify areas for improvement and optimization.
        </p>
      </li>
      <li>
        <h4>Forensic Audits:</h4>
        <p>
          Our forensic audit services are designed to investigate and detect
          financial irregularities, fraud, or discrepancies within your
          organization.
        </p>
      </li>
      <li>
        <h4>Tax Audits:</h4>
        <p>
          We assist businesses in preparing for tax audits and ensure that their
          financial records and tax filings are in full compliance with the
          relevant tax authorities.
        </p>
      </li>
    </ul>
    </div>`,
    },
    {
      img: "https://res.cloudinary.com/db4hf2hs6/image/upload/v1738853492/y9blnxoqtrvidvzzjg9w.png",
      category: "Website Design & Development",
      title: "E-commerce website design",
      price: 983,
      tag: "Website Design & Development",
      description: `   
       <div>
      <h2>
      Website Design & Development
    </h2>
    <p>
      We specialize in creating high-quality, professional Corporate Websites and
      e-Commerce Websites that help businesses stand out in the digital landscape.
      Our team of experienced designers and developers is dedicated to delivering
      innovative web solutions tailored to meet your unique business needs.
      <br />
      Whether you're a large corporation seeking a sleek, responsive corporate
      site or an online retailer looking to optimize your e-Commerce platform, we
      provide end-to-end website design services that drive engagement, improve
      user experience, and enhance your brand's online presence.
    </p>
    <p>Our Services:</p>
    <ul>
      <li>
        <b>Corporate Website Design:</b>
        
          We design professional and visually appealing corporate websites that
          reflect your brand's identity and meet your business goals. Our designs
          are modern, clean, and fully responsive, ensuring optimal performance on
          desktop, tablet, and mobile devices.
        
      </li>
      <li>
        <b>e-Commerce Website Design:</b>
        
          Our e-Commerce website solutions are tailored to help online retailers
          succeed. From product listings to checkout processes, we design
          intuitive, user-friendly e-Commerce platforms that enhance the customer
          experience and drive conversions.
        
      </li>
      <li>
        <b>Custom Web Development:</b>
        
          We provide customized web development solutions, ensuring that your
          website is built with the right functionality and features to meet your
          business needs—whether it's content management systems, user portals, or
          advanced integrations.
        
      </li>
      <li>
        <b>SEO and Performance Optimization:</b>
        
          Beyond design, we ensure your website is optimized for search engines
          and performance, helping you rank higher in search results and provide
          faster loading times for your users.
        
      </li>
      <li>
        <b>Maintenance and Support:</b>
        
          We offer ongoing website maintenance and support services, ensuring your
          website remains up-to-date, secure, and fully functional as your
          business grows.
        
      </li>
    </ul>
    </div>
        <div>
        <h2 className="text-start mt30">Create an Exceptional Online Shopping Experience</h2>
        <p>At Alakeys, we specialize in building powerful, user-friendly e-commerce platforms tailored to your business needs.
         Whether you’re launching a new online store or enhancing an existing one,
          our team is here to help you thrive in the competitive digital marketplace.</p>
          <h4 className="primary-text-color">Why Choose Our E-Commerce Development Services?</h4>
          <ul>
          <li>
            <b>Custom Solutions:</b>
          From small startups to large enterprises, we design e-commerce platforms that align with your business goals and scale as you grow.
          </li>
          <li>
            <b>Modern Technology:</b>
          We leverage cutting-edge technologies to create fast, secure, and feature-rich online stores.
          </li>
          <li>
            <b>Seamless User Experience:</b>
          Our designs focus on intuitive navigation and streamlined shopping experiences to increase customer satisfaction.
          </li>
          <li>
            <b>Secure Transactions:</b>
          We implement advanced security protocols to protect your customers’ data and ensure safe transactions.
          </li>
          <li>
            <b>Mobile-Friendly Stores:</b>
          All our e-commerce sites are fully optimized for mobile devices, ensuring a seamless shopping experience on any screen.
          </li>
          </ul>
           <br />
          <h3>Our E-Commerce Development Process</h3>
          <ol>
          <li>
           <h5>Discovery & Planning:</h5>
           <span>Understand your business, audience, and goals.</span>  
           <br />   
           <span>Define platform features, structure, and design preferences.</span>        
          </li>
          <br /> 
          <li>
           <h5>Design & Development:</h5>
           <span>Create visually appealing and user-centric designs.</span>  
           <br />   
           <span>Develop robust, scalable, and secure platforms.</span>        
          </li>
          <br /> 
          <li>
           <h5>Testing & Launch:</h5>
           <span>Conduct thorough testing for functionality, performance, and security.</span>  
           <br />   
           <span>Deploy the website or app with full compliance to industry standards.</span>        
          </li>
           <br /> 
          <li>
           <h5>Optimization & Growth:</h5>
           <span>Implement SEO and marketing strategies to drive traffic and conversions.</span>  
           <br />   
           <span>Provide ongoing support for updates and improvements.</span>        
          </li>
          </ol>
                   <br />
          <h3>Features We Deliver:</h3>
          <ul>
           <li>
           <b>Product Management: </b>
  <span> Easy-to-manage product listings with advanced categorization and filtering.</span>    
          </li>
           <li>
           <b>Personalized Shopping: </b>
  <span> AI-powered recommendations to boost user engagement and sales.</span>    
          </li>
           <li>
           <b>Multi-Currency & Multi-Language Support:</b><span> Expand globally with tailored localization options.</span>    
          </li>
           <li>
           <b>Analytics & Reporting:</b>
          <span> Gain actionable insights into sales, customer behavior, and performance metrics.
        </span>    
          </li>
          </ul>
             <br />
          <h3>Industries We Serve</h3>
          <p>We develop e-commerce platforms for a wide range of industries, including:</p>
          <ul>
          <li>
          <b>Retail & Fashion: </b>
          <span> Stylish online stores with dynamic catalog management.</span>    
          </li>
          <li>
          <b>Food & Beverage:</b>
          <span>Feature-rich platforms for restaurants, grocers, and food delivery.</span>    
          </li>
          <li>
          <b>Healthcare:</b>
          <span> Secure platforms for selling medical supplies and services.
          </span>    
          </li>
          <li>
          <b>Electronics & Technology:</b>
         <span> Scalable stores with advanced filtering and comparison features.</span>    
         </li>
          </ul>
          <br />
          <h4>Why E-Commerce is Essential for Your Business:</h4>
          <p>With the rapid shift towards online shopping, having a robust e-commerce platform is critical to staying competitive. 
          Our expertise ensures your store is:</p>
          <ul>
          <li>Accessible 24/7 to a global audience.</li>
          <li>Optimized for conversions with intuitive design and fast loading speeds.</li>
          <li>Scalable to meet your growing business needs.</li>
          </ul>
          <p><b>Get Started Today:</b>
            Ready to take your online business to the next level? Let Alakeys be your partner in e-commerce success.
          <a href="/contact-us">Contact us</a> now to schedule a consultation and discover how we can build the perfect online store for your brand.</p>
      </div>
    `,
    },
    {
      img: "https://res.cloudinary.com/db4hf2hs6/image/upload/v1738853679/keq3h50nnitqbsbugknr.jpg",
      category: "Website Design & Development",
      title: "Corporate Website design",
      price: 983,
      tag: "Website Design & Development",
      description: `
         <div>
      <h2>
      Website Design & Development
    </h2>
    <p>
      We specialize in creating high-quality, professional Corporate Websites and
      e-Commerce Websites that help businesses stand out in the digital landscape.
      Our team of experienced designers and developers is dedicated to delivering
      innovative web solutions tailored to meet your unique business needs.
      <br />
      Whether you're a large corporation seeking a sleek, responsive corporate
      site or an online retailer looking to optimize your e-Commerce platform, we
      provide end-to-end website design services that drive engagement, improve
      user experience, and enhance your brand's online presence.
    </p>
    <p>Our Services:</p>
    <ul>
      <li>
        <b>Corporate Website Design:</b>
        
          We design professional and visually appealing corporate websites that
          reflect your brand's identity and meet your business goals. Our designs
          are modern, clean, and fully responsive, ensuring optimal performance on
          desktop, tablet, and mobile devices.
        
      </li>
      <li>
        <b>e-Commerce Website Design:</b>
        
          Our e-Commerce website solutions are tailored to help online retailers
          succeed. From product listings to checkout processes, we design
          intuitive, user-friendly e-Commerce platforms that enhance the customer
          experience and drive conversions.
        
      </li>
      <li>
        <b>Custom Web Development:</b>
        
          We provide customized web development solutions, ensuring that your
          website is built with the right functionality and features to meet your
          business needs—whether it's content management systems, user portals, or
          advanced integrations.
        
      </li>
      <li>
        <b>SEO and Performance Optimization:</b>
        
          Beyond design, we ensure your website is optimized for search engines
          and performance, helping you rank higher in search results and provide
          faster loading times for your users.
        
      </li>
      <li>
        <b>Maintenance and Support:</b>
        
          We offer ongoing website maintenance and support services, ensuring your
          website remains up-to-date, secure, and fully functional as your
          business grows.
        
      </li>
    </ul>
    </div>
      `,
    },
  ];
  // useEffect(() => {
  //   async function SeedProducts() {
  //     const promises = predefinedProducts.map(async (data) => {
  //       try {
  //         const response = await axios.post("/api/products", data);
  //         console.log(`Uploaded ${data.title} successfully!`);
  //         toast.success(response?.data?.message || "Successful");
  //       } catch (error) {
  //         console.error(`Error uploading ${data.title}: ${error?.message}`);
  //       }
  //     });

  //     Promise.all(promises)
  //       .then(() => {
  //         console.log("All uploads complete!");
  //       })
  //       .catch((error) => {
  //         console.error("Error uploading data:", error);
  //       });

  //     // const response = await axios.post(`/api/products`, dummyData);
  //   }
  //   SeedProducts();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <div>
      <p>shhshsh</p>
    </div>
  );
};

export default Page;
