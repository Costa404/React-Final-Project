import starSvg from "../../../../../assets/svg/starSvg.svg";
import style from "./DavidCard.module.css";
import sunSvg from "../../../../../assets/svg/sunSvg.svg";

const DavidCard = () => {
  return (
    <div className={style.davidCard}>
      <span className={style.titleRight}>
        {" "}
        <img src={sunSvg} alt="sunSvg" />
        <span>SELF-SUMMARY</span>
        <img src={sunSvg} alt="sunSvg" />
      </span>
      <div className={`${style.card} card`}>
        {" "}
        <img className={style.test} src={starSvg} alt="" />
        <div className={style.subContentAbout}>
          {" "}
          <h6>David Handerson</h6>{" "}
          <p>
            I am a San francisco-based product designer with a focus on web
            design, illustration, a visual development. I have a diverse range
            of experience having worked across various fields and industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DavidCard;
