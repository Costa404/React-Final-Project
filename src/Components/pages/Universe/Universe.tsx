import BtnDarkLightMode from "../../CompoundComponents/BtnDarkLight/BtnDarkLightMode";
import style from "./Universe.module.css";

import HandlerImg from "./useHandlerImg/HandlerImg";

const Universe = () => {
  return (
    <div>
      <BtnDarkLightMode />
      <div className={style.handlerImgs}>
        <h6>Click on the images for more information!</h6> <HandlerImg />
      </div>
    </div>
  );
};

export default Universe;
