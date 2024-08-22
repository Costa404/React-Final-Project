import { createContext, useContext, useState, ReactNode, FC } from "react";

type HeaderContextType = {
  activeBtn: string | null;
  setActiveBtn: (titleId: string) => void;
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  return (
    <HeaderContext.Provider value={{ activeBtn, setActiveBtn }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }

  return context;
};
