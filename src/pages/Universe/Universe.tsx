// import style from "./Universe.module.css";

// import { useProducts } from "./hooks/useProducts";
// import useAnimation from "./hooks/useAnimation";
// import BtnDarkLightMode from "../../Components/CompoundComponents/HookCusto/btnDarkLightMode";

// const Universe = () => {
//   useAnimation();

//   const { universeImg } = useProducts();

//   const { percentage, trackRef } = useAnimation();

//   return (
//     <>
//       <BtnDarkLightMode />
//       <div className={style.test}>
//         <div
//           ref={trackRef}
//           className={style.universeImg}
//           style={{ transform: `translate(${percentage}%, -50%)` }}
//         >
//           {universeImg ? (
//             universeImg.imgs.map((img, index) => (
//               <div key={index} className="image">
//                 <img
//                   draggable="false"
//                   src={img.url}
//                   alt={img.title || "Image"}
//                 />{" "}
//               </div>
//             ))
//           ) : (
//             <p>Loading images...</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Universe;

// Universe.tsx
// Universe.tsx

import style from "./Universe.module.css";

// import useAnimation from "./hooks/useAnimation";
import BtnDarkLightMode from "../../Components/CompoundComponents/HookCusto/btnDarkLightMode";
// import UseHandlerImg from "./hooks/UseHandlerImg";

const Universe = () => {
  // useAnimation();

  return (
    <>
      <BtnDarkLightMode />
      <div className={style.handlerImgs}>{/* <UseHandlerImg /> */}</div>
    </>
  );
};

export default Universe;
// import React, { useState } from "react";
// import style from "./Universe.module.css";

// import { useProducts } from "./hooks/useProducts";
// import useAnimation from "./hooks/useAnimation";
// import BtnDarkLightMode from "../../Components/CompoundComponents/HookCusto/btnDarkLightMode";
// import { IoClose } from "react-icons/io5";

// const Universe = () => {
//   useAnimation();

//   const { universeImg } = useProducts();
//   const { percentage, trackRef } = useAnimation();
//   // const [isHover, setIsHover] = useState(false);
//   const [expandedImage, setExpandedImage] = useState<string | null>(null);
//   const [expandedTitle, setExpandedTitle] = useState<string | null>(null);
//   const [expandedDescription, setExpandedDescription] = useState<string | null>(
//     null
//   );

//   const handleImageClick = (img: {
//     url: string;
//     title: string;
//     description: string;
//   }) => {
//     setExpandedImage(img.url);
//     setExpandedTitle(img.title);
//     setExpandedDescription(img.description);
//   };

//   const handleClose = () => {
//     setExpandedImage(null);
//     setExpandedTitle(null);
//     setExpandedDescription(null);
//   };

//   return (
//     <>
//       <BtnDarkLightMode />
//       <div className={style.test}>
//         <div
//           ref={trackRef}
//           // onMouseOver={() => {
//           //   setIsHover(true);
//           // }}
//           // onMouseOut={() => {
//           //   setIsHover(false);
//           // }}
//           className={style.universeImg}
//           style={{ transform: `translate(${percentage}%, -50%)` }}
//         >
//           {universeImg ? (
//             universeImg.imgs.map((img, index) => (
//               <div
//                 key={index}
//                 className={`${style.image} ${
//                   expandedImage ? style.hidden : ""
//                 }`}
//                 onClick={() => handleImageClick(img)}
//               >
//                 <img
//                   draggable="false"
//                   src={img.url}
//                   alt={img.title || "Image"}
//                 />
//               </div>
//             ))
//           ) : (
//             <p>Loading images...</p>
//           )}
//         </div>

//         {expandedImage && (
//           <div className={style.expanded}>
//             <IoClose onClick={handleClose} className={style.iconClose} />
//             <img src={expandedImage} alt="Expanded view" />
//             {expandedTitle && <h2>{expandedTitle}</h2>}
//             {expandedDescription && <p>{expandedDescription}</p>}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Universe;
