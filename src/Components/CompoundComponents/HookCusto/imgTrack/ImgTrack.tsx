// import { useEffect, useState, useRef, MouseEvent, TouchEvent } from "react";

// import style from "./ImgTrack.module.css";

// const ImgTrack = () => {
//   const [mouseDown, setMouseDown] = useState<number>(0);
//   const [percentage, setPercentage] = useState<number>(0);
//   const [prevPercentage, setPrevPercentage] = useState<number>(0);

//   const trackRef = useRef<HTMLDivElement>(null);

//   const handleOnDown = (e: MouseEvent | TouchEvent) => {
//     const clientX = "clientX" in e ? e.clientX : e.touches[0].clientX;
//     setMouseDown(clientX);
//   };

//   const handleUp = () => {
//     setMouseDown(0);
//     setPrevPercentage(percentage);
//   };

//   const handleOnMove = (e: MouseEvent | TouchEvent) => {
//     if (mouseDown === 0) return;

//     const clientX = "clientX" in e ? e.clientX : e.touches[0].clientX;
//     const mouseDelta = mouseDown - clientX;
//     const maxDelta = window.innerWidth / 2;
//     const percentageChange = (mouseDelta / maxDelta) * -100;

//     const nextPercentageUnconstrained = prevPercentage + percentageChange;
//     const nextPercentage = Math.max(
//       Math.min(nextPercentageUnconstrained, 0),
//       -100
//     );

//     setPercentage(nextPercentage);
//   };

//   useEffect(() => {
//     const events = [
//       { type: "mousedown", handler: (e: MouseEvent) => handleOnDown(e) },
//       { type: "mouseup", handler: () => handleUp() },
//       { type: "mousemove", handler: (e: MouseEvent) => handleOnMove(e) },
//       { type: "touchstart", handler: (e: TouchEvent) => handleOnDown(e) },
//       { type: "touchend", handler: () => handleUp() },
//       { type: "touchmove", handler: (e: TouchEvent) => handleOnMove(e) },
//     ];

//     // Adicionar eventos
//     events.forEach(({ type, handler }) =>
//       window.addEventListener(type, handler)
//     );

//     // Remover eventos na limpeza
//     return () => {
//       events.forEach(({ type, handler }) =>
//         window.removeEventListener(type, handler)
//       );
//     };
//   }, [mouseDown, prevPercentage, percentage]);

//   return (
//     <div
//       ref={trackRef}
//       className={style.imageTrack}
//       style={{ transform: `translate(${percentage}%, -50%)` }}
//     >
//       <img
//         className={style.image}
//         src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//         draggable="false"
//       />
//       <img
//         className="image"
//         src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
//         draggable="false"
//       />
//       <img
//         className="image"
//         src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//         draggable="false"
//       />
//       <img
//         className="image"
//         src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//         draggable="false"
//       />
//       <img
//         className="image"
//         src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//         draggable="false"
//       />
//       <img
//         className="image"
//         src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
//         draggable="false"
//       />
//       <img
//         className="image"
//         src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8fHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
//         draggable="false"
//       />
//       <img
//         className="image"
//         src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//         draggable="false"
//       />
//     </div>
//   );
// };

// export default ImgTrack;
