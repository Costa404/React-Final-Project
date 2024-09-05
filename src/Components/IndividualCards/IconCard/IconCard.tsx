import { CiCamera } from "react-icons/ci";
import { PiPencilCircle } from "react-icons/pi";
import { TbVectorBezierCircle } from "react-icons/tb";
import { MdPhoneIphone } from "react-icons/md";
import style from "./IconCard.module.css";
import CustomBtn from "../../ContextApi/CustomBtn/CustomBtn";
import { GrLinkNext } from "react-icons/gr";

const IconCard = () => {
  return (
    <div className={`${style.card} card`}>
      <div className={style.test}>
        <div className={style.icons}>
          <CiCamera />
          <PiPencilCircle />
          <TbVectorBezierCircle />
          <MdPhoneIphone />
        </div>
      </div>

      <div>
        <section className={style.subContent}>
          <div className={style.spans}>
            <p>SPECIALIZATION</p>
            <span>Service Offering</span>
          </div>
          <div className={style.innerBtn}>
            <button>
              <CustomBtn id="iconCard" Icon={GrLinkNext} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IconCard;
