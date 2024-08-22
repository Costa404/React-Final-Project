// useAnimation.ts
import { useEffect, useState, useRef, MouseEvent, TouchEvent } from "react";
import { UseHandleOnMove } from "./UseHandleOnMove";

const useAnimation = () => {
  const [mouseDown, setMouseDown] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [prevPercentage, setPrevPercentage] = useState<number>(0);

  const trackRef = useRef<HTMLDivElement>(null);

  const handleOnDown = (e: MouseEvent | TouchEvent) => {
    const clientX = "clientX" in e ? e.clientX : e.touches[0].clientX;
    setMouseDown(clientX);
  };

  const handleUp = () => {
    setMouseDown(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e: MouseEvent | TouchEvent) => {
    UseHandleOnMove(e, mouseDown, prevPercentage, setPercentage);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleOnMove(e);
    const handleTouchMove = (e: TouchEvent) => handleOnMove(e);

    const events = [
      { type: "mousedown", handler: handleOnDown },
      { type: "mouseup", handler: handleUp },
      { type: "mousemove", handler: handleMouseMove },
      { type: "touchstart", handler: handleOnDown },
      { type: "touchend", handler: handleUp },
      { type: "touchmove", handler: handleTouchMove },
    ];

    // Adicionar eventos
    events.forEach(({ type, handler }) =>
      window.addEventListener(type, handler)
    );

    // Remover eventos na limpeza
    return () => {
      events.forEach(({ type, handler }) =>
        window.removeEventListener(type, handler)
      );
    };
  }, [mouseDown, prevPercentage]);

  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current;

      for (const image of track.getElementsByClassName("image")) {
        (image as HTMLElement).animate(
          {
            objectPosition: `${100 + percentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    }
  }, [percentage]);

  return { percentage, trackRef, mouseDown, prevPercentage, setPercentage };
};

export default useAnimation;
