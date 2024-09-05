import React from "react";
import style from "./Header.module.css";
import HeaderCustomBtn from "../../ContextApi/HeaderCustomBtn/HeaderCustomBtn";
import { useTheme } from "../../ContextApi/ThemeCustom/ThemeContext";

const buttons = [
  { id: "home", to: "/", label: "Home" },
  { id: "about", to: "/about", label: "About" },
  { id: "work", to: "/work", label: "Work" },
  { id: "contact", to: "/contact", label: "Contact" },
  { id: "universe", to: "/universe", label: "Universe" },
];

const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark-theme" ? style.header : style.headerLight}>
      <div>
        <h6 className={style.headerL}>Nuno</h6>
      </div>
      <div className={style.menu}>
        {buttons.map((btn) => (
          <h6 key={btn.id} className={style.underline}>
            <HeaderCustomBtn to={btn.to} id={btn.id} label={btn.label} />
          </h6>
        ))}
      </div>
      <div>
        <button className={style.btn}>Let's Talk</button>
      </div>
    </div>
  );
};

export default Header;
