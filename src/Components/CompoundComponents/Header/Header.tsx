// import style from "./Header.module.css";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// const Header = () => {
//   const [activeItem, setActiveItem] = useState<string>("Home");

//   const handleMenuItemClick = (item: string) => {
//     setActiveItem(item);
//   };

//   return (
//     <div className={style.header}>
//       <div>
//         <h6 className={style.headerL}>Nuno</h6>
//       </div>
//       <div className={style.menu}>
//         <Link
//           to="/"
//           onClick={() => handleMenuItemClick("Home")}
//           className={`${style.underline} ${
//             activeItem === "Home" ? style.active : style.inactive
//           }`}
//         >
//           Home
//         </Link>
//         <Link
//           to="/about"
//           onClick={() => handleMenuItemClick("About")}
//           className={`${style.underline} ${
//             activeItem === "About" ? style.active : style.inactive
//           }`}
//         >
//           About
//         </Link>
//         <Link
//           to="/work"
//           onClick={() => handleMenuItemClick("Work")}
//           className={`${style.underline} ${
//             activeItem === "Work" ? style.active : style.inactive
//           }`}
//         >
//           Work
//         </Link>
//         <Link
//           to="/contact"
//           onClick={() => handleMenuItemClick("Contact")}
//           className={`${style.underline} ${
//             activeItem === "Contact" ? style.active : style.inactive
//           }`}
//         >
//           Contact
//         </Link>
//       </div>
//       <div>
//         <button className={style.btn}>Let's Talk</button>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React from "react";
import style from "./Header.module.css";
import HeaderCustomBtn from "../../ContextApi/HeaderCustomBtn/HeaderCustomBtn";
import { useTheme } from "../../ContextApi/ThemeCustom/ThemeContext";

// import { useTheme } from "../../ContextApi/ThemeCustom/ThemeContext";

const buttons = [
  { id: "home", to: "/", label: "Home" },
  { id: "about", to: "/about", label: "About" },
  { id: "work", to: "/work", label: "Work" },
  { id: "contact", to: "/contact", label: "Contact" },
  { id: "universe", to: "/universe", label: "Universe" },
];

const Header: React.FC = () => {
  // const { theme, toggleTheme } = useTheme();
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
