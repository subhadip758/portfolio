import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:subhadippalx@gmail.com" data-cursor="disable">
                subhadippalx@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech in CSE (AI & ML)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/subhadip758"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://in.linkedin.com/in/subhadip-pal-1881b1315"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/subhadippalx"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              X (Twitter) <MdArrowOutward />
            </a>
            <a
              href="https://www.researchgate.net/profile/Subhadip-Pal-10?ev=hdr_xprf"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              ResearchGate <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Subhadip Pal</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
