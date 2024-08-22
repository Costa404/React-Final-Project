import Card from "../../Components/CompoundComponents/Card/Card";
import style from "../../pages/Work/Work.module.css";

import sunSvg from "../../assets/svg/sunSvg.svg";

import { BtnProvider } from "../../Components/ContextApi/CustomBtn/BtnProvider";
import BtnDarkLightMode from "../../Components/CompoundComponents/HookCusto/btnDarkLightMode";

const Work = () => {
  return (
    <section className="geralCssCol">
      <BtnDarkLightMode />
      <BtnProvider>
        <section className={style.col}>
          <div className={style.menu}>
            <div className={style.leftContent}>
              {" "}
              <Card
                className={style.card}
                img="https://img.freepik.com/free-photo/black-white-background-with-tree_23-2150530960.jpg"
                showButton={true}
                information="WEB DESIGNING"
                description="Dynamic"
                id="work"
              />
              <Card
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
                  <Card
                    className={style.card}
                    img="https://img.freepik.com/free-photo/black-white-background-with-tree_23-2150530960.jpg"
                    showButton={true}
                    information="MOBILE DESIGNING"
                    description="Seven Studio"
                    id="work3"
                  />
                  <Card
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
                <Card
                  className={style.card}
                  img="https://img.freepik.com/free-photo/black-white-background-with-tree_23-2150530960.jpg"
                  showButton={true}
                  information="MOBILR DESIGNING"
                  description="Submarine"
                  id="work5"
                />
                <Card
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
