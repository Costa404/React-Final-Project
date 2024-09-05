import style from "../../pages/Work/Work.module.css";

import sunSvg from "../../../assets/svg/sunSvg.svg";
import BtnDarkLightMode from "../../CompoundComponents/BtnDarkLight/BtnDarkLightMode";
import { BtnProvider } from "../../ContextApi/CustomBtn/BtnProvider";
import MainCard from "../../CompoundComponents/MainCard/MainCard";

const Work = () => {
  return (
    <section className="geralCssCol">
      <BtnDarkLightMode />
      <BtnProvider>
        <section className={style.col}>
          <div className={style.menu}>
            <div className={style.leftContent}>
              {" "}
              <MainCard
                className={style.card}
                img="https://img.freepik.com/free-photo/black-white-background-with-tree_23-2150530960.jpg"
                showButton={true}
                information="WEB DESIGNING"
                description="Dynamic"
                id="work"
              />
              <MainCard
                className={style.biggestCard}
                img="https://img.freepik.com/free-photo/black-white-background-with-tree_23-2150530960.jpg"
                showButton={true}
                information="PHOTOGRAPHY"
                description="Diesel H1"
                id="work2"
              />
            </div>
            <section className={style.rightContent}>
              <section className={style.sectionRight}>
                <div className={style.titleRight}>
                  <img src={sunSvg} alt="sunSVG" className={style.icons} />

                  <span>ALL PROJECTS</span>
                  <img src={sunSvg} alt="sunSVG" className={style.icons} />
                </div>
                <div className={style.subMenu}>
                  <MainCard
                    className={style.card}
                    img="https://img.freepik.com/free-photo/black-white-background-with-tree_23-2150530960.jpg"
                    showButton={true}
                    information="MOBILE DESIGNING"
                    description="Seven Studio"
                    id="work3"
                  />
                  <MainCard
                    className={style.card}
                    img="https://img.freepik.com/free-photo/black-white-background-with-tree_23-2150530960.jpg"
                    showButton={true}
                    information="BRANDING"
                    description="Raven Studio"
                    id="work4"
                  />
                </div>
              </section>
              <section className={style.lastContentCard}>
                <MainCard
                  className={style.card}
                  img="https://img.freepik.com/free-photo/black-white-background-with-tree_23-2150530960.jpg"
                  showButton={true}
                  information="MOBILR DESIGNING"
                  description="Submarine"
                  id="work5"
                />
                <MainCard
                  className={style.card}
                  img="https://img.freepik.com/free-photo/black-white-background-with-tree_23-2150530960.jpg"
                  showButton={true}
                  information="WEB DESIGNING"
                  description="Dynamic"
                  id="work6"
                />
              </section>
            </section>
          </div>
        </section>
      </BtnProvider>
    </section>
  );
};
export default Work;
