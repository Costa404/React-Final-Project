import style from "./Stats.module.css";

const Stats = () => {
  return (
    <div className={`${style.card} card`}>
      <div className={style.statsContent}>
        <span>
          <p>07</p>
        </span>
        <span>
          YEARS <br /> EXPERIENCE
        </span>
      </div>
      <div className={style.statsContent}>
        <span>
          <p>+125</p>
        </span>
        <span>
          CLIENTS <br /> WORLDWIDE
        </span>
      </div>
      <div className={style.statsContent}>
        <span>
          <p>+210</p>
        </span>
        <span>
          TOTAL <br /> PROJECTS
        </span>
      </div>
    </div>
  );
};

export default Stats;
