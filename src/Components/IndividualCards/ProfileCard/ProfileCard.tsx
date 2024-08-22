import style from "./ProfileCard.module.css";
import { GrLinkNext } from "react-icons/gr";
import CustomBtn from "../../ContextApi/CustomBtn/CustomBtn";

const ProfileCard = () => {
  return (
    <div className={`${style.card} card`}>
      <img
        src="https://img.freepik.com/free-photo/black-white-background-with-tree_23-2150530960.jpg"
        alt=""
      />
      <div className={style.profileCardContent}>
        <span>A WEB DESIGNER</span>

        <h6>
          Nuno <br />
          Costa.
        </h6>

        <span>I am a Web Designer based in san francisco.</span>
        <div className={style.btn}>
          <div className={style.innerBtn}>
            <button>
              <CustomBtn id="profile-card-btn" Icon={GrLinkNext} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
