import Section from "../../Components/CompoundComponents/Section/Section";
import Main from "../../Components/CompoundComponents/Main/Main";
import Card from "../../Components/CompoundComponents/Card/Card";
import ProfileCard from "../../Components/IndividualCards/ProfileCard/ProfileCard";
import CardTopRight from "../../Components/IndividualCards/CardTopRight/CardTopRight";
import styleSection from "../../Components/CompoundComponents/Section/Section.module.css";
import IconCard from "../../Components/IndividualCards/IconCard/IconCard";
import Stats from "../../Components/IndividualCards/Stats/Stats";

import CardTogether from "../../Components/CompoundComponents/CardTogether/CardTogether";
import SocialCard from "../../Components/CompoundComponents/SocialsCard/SocialCard";
import { BtnProvider } from "../../Components/ContextApi/CustomBtn/BtnProvider";
import BtnDarkLightMode from "../../Components/CompoundComponents/HookCusto/btnDarkLightMode";
const Homepage = () => {
  return (
    <section className="geralCssCol">
      <BtnDarkLightMode />
      <BtnProvider>
        <Main>
          <Section>
            <ProfileCard />
            <Section className={styleSection.sectionCol}>
              <CardTopRight />
              <Section>
                <Card
                  img="https://c4.wallpaperflare.com/wallpaper/486/591/731/space-galaxy-nasa-spitzer-space-telescope-wallpaper-preview.jpg"
                  information="MORE ABOUT ME"
                  description="Credentials"
                  showButton={true}
                  id="1"
                />
                <Card
                  img="https://c4.wallpaperflare.com/wallpaper/486/591/731/space-galaxy-nasa-spitzer-space-telescope-wallpaper-preview.jpg"
                  information="SHOWCASE"
                  description="Projects"
                  showButton={true}
                  id="2"
                />
              </Section>
            </Section>
          </Section>

          <section className={styleSection.sectionTwo}>
            <Card
              img="https://c4.wallpaperflare.com/wallpaper/486/591/731/space-galaxy-nasa-spitzer-space-telescope-wallpaper-preview.jpg"
              information="BLOG"
              description="GFonts"
              showButton={true}
              id="3"
            />
            <IconCard />
            <SocialCard />
          </section>
          <section className={styleSection.sectionTwo}>
            <Stats />
            <CardTogether />
          </section>
        </Main>
      </BtnProvider>
    </section>
  );
};

export default Homepage;
