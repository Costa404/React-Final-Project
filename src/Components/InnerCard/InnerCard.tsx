// import { PiRadioButton } from "react-icons/pi";
// import style from "./InnerCard.module.css";
// import { IconType } from "react-icons";

// type InnerType = {
//   className?: string;
//   information?: string;
//   description?: string;
//   icons?: IconType[];
// };

// const InnerCard = ({
//   className,
//   icons,
//   information,
//   description,
// }: InnerType) => {
//   return (
//     <div className={`${className} ${style.innerContent}`}>
//       <div className={style.icons}>
//         {icons &&
//           icons.map((Icon, index) => (
//             <Icon key={index} className={style.icon} />
//           ))}
//       </div>
//       <div>
//         <div className={style.innerSubContent}>
//           <div className={style.innerSpan}>
//             <span>{information}</span>
//             <span>{description}</span>
//           </div>
//           <div className={style.innerBtn}>
//             <button>
//               <PiRadioButton />
//             </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default InnerCard;
