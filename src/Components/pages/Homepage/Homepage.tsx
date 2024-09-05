import styleSection from "../../CompoundComponents/Section/Section.module.css";

import { BtnProvider } from "../../ContextApi/CustomBtn/BtnProvider";
import BtnDarkLightMode from "../../CompoundComponents/BtnDarkLight/BtnDarkLightMode";
import SocialCard from "../../CompoundComponents/SocialsCard/SocialCard";
import Stats from "../../IndividualCards/Stats/Stats";
import CardBottomRight from "../../CompoundComponents/CardBottomRight/CardBottomRight";
import IconCard from "../../IndividualCards/IconCard/IconCard";
import MainCard from "../../CompoundComponents/MainCard/MainCard";
import Section from "../../CompoundComponents/Section/Section";
import ProfileCard from "../../IndividualCards/ProfileCard/ProfileCard";
import Main from "../../CompoundComponents/Main/Main";
import CardTopRight from "../../IndividualCards/CardTopRight/CardTopRight";

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
                <MainCard
                  img="https://c4.wallpaperflare.com/wallpaper/486/591/731/space-galaxy-nasa-spitzer-space-telescope-wallpaper-preview.jpg"
                  information="MORE ABOUT ME"
                  description="Credentials"
                  showButton={true}
                  id="1"
                />
                <MainCard
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
            <MainCard
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
            <CardBottomRight />
          </section>
        </Main>
      </BtnProvider>
    </section>
  );
};

export default Homepage;
