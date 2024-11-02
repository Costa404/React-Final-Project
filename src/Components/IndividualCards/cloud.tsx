// CloudArea.tsx
import React, { useEffect } from "react";
import { useCloud } from "./CloudContext";

interface CloudAreaProps {
  children: React.ReactNode;
}

const CloudArea: React.FC<CloudAreaProps> = ({ children }) => {
  const { setVisibility } = useCloud();

  const handleMouseEnter = () => setVisibility(true);
  const handleMouseLeave = () => setVisibility(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block" }} // Ajuste conforme necessário
    >
      {children}
    </div>
  );
};

export default CloudArea;
