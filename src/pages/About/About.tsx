import Section from "../../Components/CompoundComponents/Section/Section";
import style from "../About/About.module.css";
import DavidCard from ".//CardsAbout/DavidCard/DavidCard";
import ExperienceEducation from "./CardsAbout/ExperienceCard/ExperienceEducation";
import SocialCard from "../../Components/CompoundComponents/SocialsCard/SocialCard";
import CardTogether from "../../Components/CompoundComponents/CardTogether/CardTogether";
import Card from "../../Components/CompoundComponents/Card/Card";
import { BtnProvider } from "../../Components/ContextApi/CustomBtn/BtnProvider";

import BtnDarkLightMode from "../../Components/CompoundComponents/HookCusto/btnDarkLightMode";

const About = () => {
  return (
    <section className="geralCssCol">
      <BtnDarkLightMode />
      <BtnProvider>
        <Section className={style.aboutContent}>
          <div className={`${style.card} card`}>
            <img
              src="https://img.freepik.com/free-photo/black-white-background-with-tree_23-2150530960.jpg"
              alt=""
            />
          </div>

          <Section className={style.col}>
            {" "}
            <DavidCard />
          </Section>
        </Section>
        <Section>
          <ExperienceEducation
            title="EXPERIENCE"
            year="2007 - 2017"
            information="Framer Designer & Developer"
            description="Bluebase Designs"
            yearBtm="2017 - 2023"
            informationBtm="Front-End Developer"
            descriptionBtm="Larsen & Toubro"
          />
          <ExperienceEducation
            title="EDUCATION"
            year="2004 - 2007"
            information="Bachelor Degree in Psychology"
            description="University of California"
            yearBtm="2007 - 2009"
            informationBtm="Master Degree in Designing "
            descriptionBtm="University of Texas"
          />
        </Section>
        <Section className={style.lastSectionAbout}>
          <SocialCard />
          <CardTogether className={style.cardTogetherAbout} />

          <Card
            className={style.cardAboutCostu}
            img="https://img.freepik.com/free-photo/black-white-background-with-tree_23-2150530960.jpg"
            information="MORE ABOUT ME"
            description="Cradentials"
            showButton={true}
            id="3"
          />
        </Section>
      </BtnProvider>
    </section>
  );
};
export default About;
