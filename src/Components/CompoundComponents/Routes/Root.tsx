import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { HeaderProvider } from "../../ContextApi/HeaderCustomBtn/HeaderProvider";
import { useTheme } from "../../ContextApi/ThemeCustom/ThemeContext";
import { useEffect } from "react";

type RootProps = {
  children: React.ReactNode;
};

const Root = ({ children }: RootProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    const rootElement = document.getElementById("root-container");
    if (rootElement) {
      rootElement.className = theme;
    }
  }, [theme]);

  return (
    <div id="root-container">
      {" "}
      <>
        <HeaderProvider>
          <Header />
        </HeaderProvider>

        {children}

        <Footer />
      </>
    </div>
  );
};

export default Root;
