import Link from "next/link";

export default function Mega({ staticMenuClass }) {
  return (
    <>
      <div id="mega-menu">
        <a
          className={`btn-mega primary-text-color fw500 ${
            staticMenuClass ? staticMenuClass : ""
          } `}
        >
          <span
            className={`primary-text-color pl30 pl10-xl pr5 fz15 vam flaticon-menu ${
              staticMenuClass ? staticMenuClass : ""
            } `}
          />
          Categories
        </a>
        <ul className="menu ps-0">
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-developer" />
              <span className="menu-title">Development &amp; IT</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="">
                <div className="h6 cat-title">Web &amp; App Development</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Website Development</Link>
                  </li>
                  <li>
                    <Link href="/">App Development</Link>
                  </li>
                  <li>
                    <Link href="/">UX/UI Development</Link>
                  </li>
                  <li>
                    <Link href="/">Custom Software Development</Link>
                  </li>
                  <li>
                    <Link href="/">E-Commerce Development</Link>
                  </li>
                  <li>
                    <Link href="/">Web Application Development</Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="h6 cat-title">IT Support &amp; Services</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Network Solutions</Link>
                  </li>
                  <li>
                    <Link href="/">IT Consultation</Link>
                  </li>
                  <li>
                    <Link href="/">Cloud Computing</Link>
                  </li>
                  <li>
                    <Link href="/">Database Management</Link>
                  </li>
                  <li>
                    <Link href="/">IT Infrastructure Management</Link>
                  </li>
                  <li>
                    <Link href="/">Cybersecurity Services</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-web-design-1" />
              <span className="menu-title">Design &amp; Creative</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <div className="h6 cat-title">Marketing Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Social Media Design</Link>
                  </li>
                  <li>
                    <Link href="/">Email Design</Link>
                  </li>
                  <li>
                    <Link href="/">Web Banners</Link>
                  </li>
                  <li>
                    <Link href="/">Signage Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Print Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">T-Shirts &amp; Merchandise</Link>
                  </li>
                  <li>
                    <Link href="/">Flyer Design</Link>
                  </li>
                  <li>
                    <Link href="/">Brochure Design</Link>
                  </li>
                  <li>
                    <Link href="/">Poster Design</Link>
                  </li>
                  <li>
                    <Link href="/">Catalog Design</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Art &amp; Illustration</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Illustration</Link>
                  </li>
                  <li>
                    <Link href="/">NFT Art</Link>
                  </li>
                  <li>
                    <Link href="/">Pattern Design</Link>
                  </li>
                  <li>
                    <Link href="/">Portraits &amp; Caricatures</Link>
                  </li>
                  <li>
                    <Link href="/">Cartoons &amp; Comics</Link>
                  </li>
                  <li>
                    <Link href="/">Tattoo Design</Link>
                  </li>
                  <li>
                    <Link href="/">Storyboards</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Visual Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Image Editing</Link>
                  </li>
                  <li>
                    <Link href="/">Presentation Design</Link>
                  </li>
                  <li>
                    <Link href="/">Infographic Design</Link>
                  </li>
                  <li>
                    <Link href="/">Vector Tracing</Link>
                  </li>
                  <li>
                    <Link href="/">Resume Design</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-digital-marketing" />
              <span className="menu-title">Digital Marketing</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <div className="h6 cat-title">Social Media Marketing</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Facebook Advertising</Link>
                  </li>
                  <li>
                    <Link href="/">Instagram Marketing</Link>
                  </li>
                  <li>
                    <Link href="/">LinkedIn Advertising</Link>
                  </li>
                  <li>
                    <Link href="/">Twitter Campaigns</Link>
                  </li>
                  <li>
                    <Link href="/">Pinterest Advertising</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Search Engine Marketing</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Google Ads</Link>
                  </li>
                  <li>
                    <Link href="/">Bing Ads</Link>
                  </li>
                  <li>
                    <Link href="/">Pay-Per-Click (PPC)</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Content Marketing</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Blog Writing</Link>
                  </li>
                  <li>
                    <Link href="/">Video Content Creation</Link>
                  </li>
                  <li>
                    <Link href="/">Infographic Creation</Link>
                  </li>
                  <li>
                    <Link href="/">Copywriting</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Email Marketing</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Email Campaigns</Link>
                  </li>
                  <li>
                    <Link href="/">Newsletter Design</Link>
                  </li>
                  <li>
                    <Link href="/">Email List Building</Link>
                  </li>
                  <li>
                    <Link href="/">Email Automation</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">SEO &amp; SEM</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Search Engine Optimization (SEO)</Link>
                  </li>
                  <li>
                    <Link href="/">On-Page SEO</Link>
                  </li>
                  <li>
                    <Link href="/">Off-Page SEO</Link>
                  </li>
                  <li>
                    <Link href="/">Local SEO</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">
                  Affiliate &amp; Influencer Marketing
                </div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Affiliate Marketing Campaigns</Link>
                  </li>
                  <li>
                    <Link href="/">Influencer Partnerships</Link>
                  </li>
                  <li>
                    <Link href="/">Influencer Marketing Strategy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-microphone" />
              <span className="menu-title">Music &amp; Audio</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <div className="h6 cat-title">Audio Production</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Music Production</Link>
                  </li>
                  <li>
                    <Link href="/">Podcast Production</Link>
                  </li>
                  <li>
                    <Link href="/">Jingles &amp; Intros</Link>
                  </li>
                  <li>
                    <Link href="/">Remixing &amp; Mashups</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Voice Services</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Voiceover Recording</Link>
                  </li>
                  <li>
                    <Link href="/">Narration</Link>
                  </li>
                  <li>
                    <Link href="/">Dubbing Services</Link>
                  </li>
                  <li>
                    <Link href="/">IVR &amp; Phone Messages</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Music Composition</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Custom Music</Link>
                  </li>
                  <li>
                    <Link href="/">Film Scoring</Link>
                  </li>
                  <li>
                    <Link href="/">Video Game Music</Link>
                  </li>
                  <li>
                    <Link href="/">Songwriting</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Editing &amp; Mixing</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Audio Editing</Link>
                  </li>
                  <li>
                    <Link href="/">Mixing &amp; Mastering</Link>
                  </li>
                  <li>
                    <Link href="/">Noise Reduction</Link>
                  </li>
                  <li>
                    <Link href="/">Sound Effects</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Specialized Audio</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Audiobook Production</Link>
                  </li>
                  <li>
                    <Link href="/">Background Music</Link>
                  </li>
                  <li>
                    <Link href="/">Karaoke Tracks</Link>
                  </li>
                  <li>
                    <Link href="/">DJ Drops &amp; Tags</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Other Services</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Sound Design</Link>
                  </li>
                  <li>
                    <Link href="/">Audio Restoration</Link>
                  </li>
                  <li>
                    <Link href="/">Theme Music</Link>
                  </li>
                  <li>
                    <Link href="/">Song Covers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-video-file" />
              <span className="menu-title">Video &amp; Animation</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <div className="h6 cat-title">Video Production</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Promotional Videos</Link>
                  </li>
                  <li>
                    <Link href="/">Corporate Videos</Link>
                  </li>
                  <li>
                    <Link href="/">Event Videos</Link>
                  </li>
                  <li>
                    <Link href="/">Product Demos</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Animation</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">2D Animation</Link>
                  </li>
                  <li>
                    <Link href="/">3D Animation</Link>
                  </li>
                  <li>
                    <Link href="/">Motion Graphics</Link>
                  </li>
                  <li>
                    <Link href="/">Explainer Videos</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">
                  Editing &amp; Post-Production
                </div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Video Editing</Link>
                  </li>
                  <li>
                    <Link href="/">Color Grading</Link>
                  </li>
                  <li>
                    <Link href="/">Sound Design</Link>
                  </li>
                  <li>
                    <Link href="/">Visual Effects (VFX)</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Social Media Videos</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Instagram Reels</Link>
                  </li>
                  <li>
                    <Link href="/">YouTube Videos</Link>
                  </li>
                  <li>
                    <Link href="/">TikTok Videos</Link>
                  </li>
                  <li>
                    <Link href="/">Facebook Ads</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Specialized Animation</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Whiteboard Animation</Link>
                  </li>
                  <li>
                    <Link href="/">Character Animation</Link>
                  </li>
                  <li>
                    <Link href="/">Logo Animation</Link>
                  </li>
                  <li>
                    <Link href="/">Lyric Videos</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Other Services</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Storyboard Creation</Link>
                  </li>
                  <li>
                    <Link href="/">Scripting &amp; Screenwriting</Link>
                  </li>
                  <li>
                    <Link href="/">Voiceover Services</Link>
                  </li>
                  <li>
                    <Link href="/">Subtitling &amp; Captioning</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-goal" />
              <span className="menu-title">Finance &amp; Accounting</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <div className="h6 cat-title">Accounting Services</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Bookkeeping</Link>
                  </li>
                  <li>
                    <Link href="/">Financial Reporting</Link>
                  </li>
                  <li>
                    <Link href="/">Payroll Services</Link>
                  </li>
                  <li>
                    <Link href="/">Accounts Reconciliation</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Taxation</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Tax Registration</Link>
                  </li>
                  <li>
                    <Link href="/">Tax Returns Filing</Link>
                  </li>
                  <li>
                    <Link href="/">Tax Advisory</Link>
                  </li>
                  <li>
                    <Link href="/">Tax Compliance</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Auditing</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Internal Audits</Link>
                  </li>
                  <li>
                    <Link href="/">External Audits</Link>
                  </li>
                  <li>
                    <Link href="/">Compliance Audits</Link>
                  </li>
                  <li>
                    <Link href="/">Forensic Audits</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Financial Planning</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Budgeting</Link>
                  </li>
                  <li>
                    <Link href="/">Cash Flow Management</Link>
                  </li>
                  <li>
                    <Link href="/">Financial Forecasting</Link>
                  </li>
                  <li>
                    <Link href="/">Risk Assessment</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Consulting</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Business Advisory</Link>
                  </li>
                  <li>
                    <Link href="/">Cost Analysis</Link>
                  </li>
                  <li>
                    <Link href="/">Process Improvement</Link>
                  </li>
                  <li>
                    <Link href="/">System Implementation</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Compliance</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Regulatory Reporting</Link>
                  </li>
                  <li>
                    <Link href="/">Company Annual Returns</Link>
                  </li>
                  <li>
                    <Link href="/">Statutory Filings</Link>
                  </li>
                  <li>
                    <Link href="/">Audit Preparation</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
