// // CloudArea.tsx
// import React from "react";

// interface CloudAreaProps {
//   children: React.ReactNode;
// }

// const CloudArea: React.FC<CloudAreaProps> = ({ children }) => {
//   const { setVisibility } = useCloud();

//   const handleMouseEnter = () => setVisibility(true);
//   const handleMouseLeave = () => setVisibility(false);

//   return (
//     <div
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{ display: "inline-block" }} // Ajuste conforme necessário
//     >
//       {children}
//     </div>
//   );
// };

// export default CloudArea;
