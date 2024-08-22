import React from "react";
import style from "./Section.module.css";

type SectionType = {
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionType> = ({ children, className }) => {
  return <div className={`${style.section} ${className}`}>{children}</div>;
};

export default Section;
