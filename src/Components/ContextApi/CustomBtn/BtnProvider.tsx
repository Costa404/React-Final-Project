import { createContext, useContext, useState, ReactNode, FC } from "react";

type BtnContextType = {
  activeBtn: string | null;
  setActiveBtn: (btnId: string) => void;
};

const BtnContext = createContext<BtnContextType | undefined>(undefined);

export const BtnProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  return (
    <BtnContext.Provider value={{ activeBtn, setActiveBtn }}>
      {" "}
      {children}
    </BtnContext.Provider>
  );
};

export const useBtnContext = () => {
  const context = useContext(BtnContext);
  if (context === undefined) {
    throw new Error("useBtnContext must be used within a BtnProvider");
  }
  return context;
};
