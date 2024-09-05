import style from "./CardTopRight.module.css";

const CardTopRight = () => {
  return (
    <div className={`${style.card} card`}>
      <ul className={style.subContent}>
        <li className={style.item}>
          LATEST WORK <span>FEATURED</span>
        </li>
        <li className={style.item}>
          LATEST WORK <span> FEATURED</span>
        </li>
        <li className={style.item}>
          LATEST WORK <span>FEATURED</span>
        </li>
      </ul>
    </div>
  );
};

export default CardTopRight;
