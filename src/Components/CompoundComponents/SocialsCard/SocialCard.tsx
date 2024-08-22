import style from "./SocialCard.module.css";
import CustomBtn from "../../ContextApi/CustomBtn/CustomBtn";
import ballSvg from "../../../assets/svg/ball.svg";
import twitterSvg from "../../../assets/svg/twitter.svg";
import { GrLinkNext } from "react-icons/gr";

const SocialCard = () => {
  return (
    <div className={`${style.card} card`}>
      <div className={style.socialCard}>
        <img src={ballSvg} alt="" />
        <img src={twitterSvg} alt="" />
      </div>
      <div className={style.subContent}>
        <div className={style.spanCustom}>
          {" "}
          <span className={style.titleCustom}>STAY WITH ME</span>
          <span>Profiles</span>
        </div>
        <div className={style.innerBtn}>
          <button>
            <CustomBtn id="iconSocialCard" Icon={GrLinkNext} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
