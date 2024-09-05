import styleCard from "./MainCard.module.css";
import { GrLinkNext } from "react-icons/gr";
import CustomBtn from "../../ContextApi/CustomBtn/CustomBtn";
import { IconType } from "react-icons";

import "../../../index.css";

type MainCardProps = {
  className?: string;
  img?: string;
  information?: React.ReactNode;
  description?: React.ReactNode;
  showButton?: boolean;
  icon?: IconType;
  id?: string;
};

const MainCard = ({
  className,
  img,
  information,
  description,
  showButton,
  icon: Icon,
  id: Id,
}: MainCardProps) => {
  return (
    <div className={`card ${styleCard.card} ${className}`}>
      {img && <img src={img} alt="" />}
      <div className={styleCard.subContent}>
        <div className={styleCard.marginLeft}>
          {Icon ? <Icon /> : null}
          {information && (
            <span className={styleCard.titleCost}>{information}</span>
          )}
          {description && (
            <span className={styleCard.fontWeight}>{description}</span>
          )}
        </div>
        {showButton && (
          <div className={styleCard.innerBtn}>
            <button>
              <CustomBtn id={Id} Icon={GrLinkNext} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainCard;
