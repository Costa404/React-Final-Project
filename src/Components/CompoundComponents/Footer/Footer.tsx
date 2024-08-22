import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <section className={style.logo}>NunoCosta</section>
      <div>
        <span>HOME</span>
        <span>ABOUT</span>
        <span>WORKS</span>
        <span>CONTACT</span>
      </div>
      <span>
        © All rights reserved by <span className={style.color}>NunoCosta</span>
      </span>
    </div>
  );
};

export default Footer;
