import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHeaderContext } from "../HeaderCustomBtn/HeaderProvider";
import style from "../CustomBtn/CustomBtn.module.css";

type CustomBtnProps = {
  id?: string;
  to: string;
  label: string;
};

const HeaderCustomBtn: React.FC<CustomBtnProps> = ({ id, to, label }) => {
  const { activeBtn, setActiveBtn } = useHeaderContext();
  const location = useLocation();

  useEffect(() => {
    if (id && location.pathname === to) {
      setActiveBtn(id);
    }
  }, [location, id, to, setActiveBtn]);

  const isActive = activeBtn === id;

  return (
    <Link to={to} className={`${isActive ? style.active : style.colorDefault}`}>
      {label}
    </Link>
  );
};

export default HeaderCustomBtn;
