import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../../ContextApi/ThemeCustom/ThemeContext";

const BtnDarkLightMode = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="iconLight">
      <button onClick={toggleTheme}>
        {theme === "dark-theme" ? (
          <MdOutlineDarkMode />
        ) : (
          <MdDarkMode className="darkModeIcon" />
        )}
      </button>
    </div>
  );
};

export default BtnDarkLightMode;
