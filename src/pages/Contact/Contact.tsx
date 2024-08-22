import instagram from "../../../src/assets/svg/instagram.svg";
import mail from "../../../src/assets/svg/mail.svg";
import twitter from "../../../src/assets/svg/twitter.svg";
import ball from "../../../src/assets/svg/ball.svg";
import local from "../../../src/assets/svg/local.svg";
import phone from "../../../src/assets/svg/phone.svg";
import style from "./Contact.module.css";
import Section from "../../Components/CompoundComponents/Section/Section";
import ContactForm from "./form/form";
import starSvg from "../../assets/svg/starSvg.svg";
import { BtnProvider } from "../../Components/ContextApi/CustomBtn/BtnProvider";

import BtnDarkLightMode from "../../Components/CompoundComponents/HookCusto/btnDarkLightMode";

const Contact = () => {
  return (
    <section className="geralCssCol">
      <BtnDarkLightMode />
      <BtnProvider>
        <Section className={style.sectionContact}>
          <div className={style.contactContentLeft}>
            <p>CONTACT INFO</p>
            <section>
              <div className={style.contactSubContent}>
                <img src={mail} alt="mail" />
                <div>
                  <span>Contact us</span>
                  <p>info@bluebase.com</p>
                  <p>info@bluebase2.com</p>
                </div>
              </div>

              <div className={style.contactSubContent}>
                <img src={phone} alt="mail" />
                <div>
                  <span>MAIL US</span>
                  <p>info@bluebase.com</p>
                  <p>info@bluebase2.com</p>
                </div>
              </div>

              <div className={style.contactSubContent}>
                <img src={local} alt="mail" />
                <div>
                  <span>Location</span>
                  <p>
                    22 Baker Street, <br /> Texas United States <br />
                    W1U 3BW
                  </p>
                </div>
              </div>
            </section>
            <div>
              <p>SOCIAL INFO</p>

              <div className={style.socials}>
                <img src={ball} alt="ballSvg" />
                <img src={twitter} alt="twitterSvg" />
                <img src={instagram} alt="instgramSvg" />
              </div>
            </div>
          </div>
          <div className={style.contactContentRight}>
            <div className={style.subContentRight}>
              {" "}
              <h6>
                Let's work <span>together.</span>
              </h6>
              <img src={starSvg} alt="starSvg" />
            </div>
            <div className={style.input}>
              {" "}
              <ContactForm />
            </div>
          </div>
        </Section>
      </BtnProvider>
    </section>
  );
};
export default Contact;
