import style from "./Main.module.css";

type MainType = {
  children: React.ReactNode;
};

const Main = (props: MainType) => {
  const { children } = props;
  return <div className={style.main}>{children} </div>;
};

export default Main;
