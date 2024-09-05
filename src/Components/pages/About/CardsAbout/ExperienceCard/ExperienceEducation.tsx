import style from "./ExperienceEducation.module.css";

type ExperienceEducationProps = {
  title: string;
  year: string;

  // tipei year como string pois se tipasse como number ia fazer a subtraçao

  information: string;
  description: string;
  yearBtm: string;
  informationBtm: string;
  descriptionBtm: string;
};

const ExperienceEducation = ({
  title,
  year,
  information,
  description,
  yearBtm,
  informationBtm,
  descriptionBtm,
}: ExperienceEducationProps) => {
  return (
    <div className={`${style.card} card`}>
      <h6>{title}</h6>
      <div>
        <span>{year}</span>
        <h6> {information}</h6>
        <span>{description}</span>
      </div>
      <div>
        <span>{yearBtm}</span>
        <h6> {informationBtm}</h6>
        <span>{descriptionBtm}</span>
      </div>
    </div>
  );
};

export default ExperienceEducation;
