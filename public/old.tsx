// import Header from "./componentsOrigin/Header/Header";
// // import Card from "./componentsOrigin/Card/Card";
// import Body from "./componentsOrigin/Body/Body";
// import styleCard from "./components/Card/Card.module.css";
// import styleSection from "./components/Section/Section.module.css";
// import Section from "./componentsOrigin/Section/Section";
// import Main from "./componentsOrigin/Main/Main";
// import InnerCard from "./components/InnerCard/InnerCard";
// import { CiCamera } from "react-icons/ci";
// import { PiPencilCircle } from "react-icons/pi";
// import { TbVectorBezierCircle } from "react-icons/tb";
// import { MdPhoneIphone } from "react-icons/md";

// function App() {
//   return (
//     <>
//       <Body>
//         <Header />
//         {/* ======================
//         First
//         ====================== */}
//         <Main>
//           <Section>
//             <Section>
//               <Card
//                 img="https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg"
//                 title="Web Designer"
//                 information="Nuno Costa."
//                 description="I am a Web Designer based in San Francisco"
//                 showButton={true}
//               />
//             </Section>

//             <Section className={styleSection.testT}>
//               <Card
//                 className={styleCard.thinCard}
//                 description="I am a Web Designer based in San Francisco"
//               />

//               <Section>
//                 <Card
//                   className={styleCard.test}
//                   img="https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg"
//                   title="MORE ABOUT ME"
//                   information="Cradentials"
//                   showButton={true}
//                 />
//                 <Card
//                   className={styleCard.test}
//                   img="https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg"
//                   title="SHOWCASE"
//                   information="Projects"
//                   showButton={true}
//                 />
//               </Section>
//             </Section>
//           </Section>
//           {/* ======================
//           Second
//           ====================== */}
//           <Section>
//             <Card
//               className={styleCard.test}
//               img="https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg"
//               title="Blog"
//               information="GFonts"
//               showButton={true}
//             />

//             {/* <Card
//               className={styleCard.cardSectionTwo}
//               img="https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg"
//               title="MORE ABOUT ME"
//               information="Cradentials"
//             /> */}
//             <InnerCard
//               className={styleCard.cardSectionTwo}
//               icons={[
//                 CiCamera,
//                 PiPencilCircle,
//                 TbVectorBezierCircle,
//                 MdPhoneIphone,
//               ]}
//               information="Specialization"
//               description="Services Offering"
//             />
//             <Card
//               className={styleCard.test}
//               img="https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg"
//               title="Stay With Me"
//               information="Porfiles"
//               showButton={true}
//             />
//           </Section>
//           <Section>
//             <InnerCard
//               className={styleCard.test}
//               information="Information"
//               description="Description"
//             />
//             <InnerCard
//               className={styleCard.test}
//               information="Information"
//               description="Description"
//             />
//           </Section>
//         </Main>
//       </Body>
//     </>
//   );
// }

// export default App;

// import style from "./Card.module.css";
// import { PiRadioButton } from "react-icons/pi";

// type CardType = {
//   className?: string;
//   title?: string;
//   img?: string;
//   information?: string;
//   description?: string;
//   showButton?: boolean;
// };

// const Card = ({
//   className,
//   title,
//   img,
//   information,
//   description,
//   showButton,
// }: CardType) => (
//   <div className={`${style.card} ${className}`}>
//     {img && <img src={img} alt={name || "Card image"} />}
//     <div className={style.subContent}>
//       {title && <span>{title}</span>}
//       {information && <span>{information}</span>}
//       {description && <span>{description}</span>}
//       {showButton && ( // Renderização condicional do botão
//         <div className={style.innerBtn}>
//           <button>
//             <PiRadioButton />
//           </button>
//         </div>
//       )}
//     </div>
//   </div>
// );

// export default Card;
