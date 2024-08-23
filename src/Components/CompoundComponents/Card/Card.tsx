import styleCard from "./Card.module.css"; // Importa o módulo CSS
import { GrLinkNext } from "react-icons/gr";
import CustomBtn from "../../ContextApi/CustomBtn/CustomBtn";
import { IconType } from "react-icons";

import "../../../index.css"; // Importa o CSS global
// import { useTheme } from "../../ContextApi/ThemeCustom/ThemeContext";

type CardProps = {
  className?: string; // Classe adicional passada como prop
  img?: string;
  information?: React.ReactNode;
  description?: React.ReactNode;
  showButton?: boolean;
  icon?: IconType;
  id?: string;
};

const Card = ({
  className, // Classe adicional passada como prop
  img,
  information,
  description,
  showButton,
  icon: Icon,
  id: Id,
}: CardProps) => {
  // const { theme } = useTheme();

  // const cardClass = `${styleCard.card} ${styleCard.cardLight} ${
  //   theme === "dark-theme" ? "card" : "cardLight"
  // } ${className || ""}`;

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

export default Card;

// raefce
// import React from 'react'

// const Card = () => {
//   return (
//     <div>Card</div>
//   )
// }

// export default Card
