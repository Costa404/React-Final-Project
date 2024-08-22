import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type ThemeContextType = {
  theme: string; // Definido como obrigatório, para garantir que o valor sempre está presente
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("dark-theme");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "dark-theme" ? "light-theme" : "dark-theme"
    );
  };

  // useEffect(() => {
  //   const rootElement = document.getElementById("root");
  //   if (rootElement) {
  //     rootElement.className = theme;
  //   }
  // }, [theme]);
  useEffect(() => {
    document.body.className = theme; // Atualiza a classe no body
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>{" "}
      {/* Removido o ponto e vírgula extra */}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
