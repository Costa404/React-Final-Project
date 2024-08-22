import { useBtnContext } from "./BtnProvider";
import style from "../CustomBtn/CustomBtn.module.css";
import { IconType } from "react-icons";

type CustomBtnProps = {
  id?: string;
  Icon: IconType;
};

import React from "react";
import { useTheme } from "../ThemeCustom/ThemeContext";

const CustomBtn: React.FC<CustomBtnProps> = ({ id, Icon }) => {
  const { activeBtn, setActiveBtn } = useBtnContext();

  const isActive = activeBtn === id;
  const { theme } = useTheme();

  return (
    <button
      onClick={() => {
        if (id) {
          setActiveBtn(id);
        }
      }}
      className={` ${
        isActive
          ? theme === "light-theme"
            ? style.activeLight
            : style.active
          : style.colorDefault
      }`}
    >
      <Icon />
    </button>
  );
};

export default CustomBtn;
