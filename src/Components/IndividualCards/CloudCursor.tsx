// CloudCursor.tsx
import React, { useEffect, useState } from "react";

const CloudCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "50px",
        height: "50px",
        backgroundColor: "rgba(0, 0, 255, 0.3)", // Nuvem azul com transparência
        borderRadius: "50%",
        pointerEvents: "none", // Para que a nuvem não interfira na interação com outros elementos
        transform: "translate(-50%, -50%)", // Para centralizar o círculo no cursor
      }}
    />
  );
};

export default CloudCursor;
