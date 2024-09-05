import style from "./CardBottomRight.module.css";
import CustomBtn from "../../ContextApi/CustomBtn/CustomBtn";
import { GrLinkNext } from "react-icons/gr";
import starSvg from "../../../../src/assets/svg/starSvg.svg";

type CardTogetherProps = {
  className?: string;
};

const CardBottomRight = ({ className }: CardTogetherProps) => {
  return (
    <div className={`${style.card} ${className} card`}>
      <img src={starSvg} alt="" />
      <div className={style.subContent}>
        <span>
          Let's <br /> work <span className={style.colorBlue}>Together.</span>
        </span>
        <button>
          <CustomBtn id="together-card-btn" Icon={GrLinkNext} />
        </button>
      </div>
    </div>
  );
};

export default CardBottomRight;
