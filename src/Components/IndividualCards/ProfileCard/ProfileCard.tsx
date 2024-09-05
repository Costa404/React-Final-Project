import style from "./ProfileCard.module.css";
import { GrLinkNext } from "react-icons/gr";
import CustomBtn from "../../ContextApi/CustomBtn/CustomBtn";

const ProfileCard = () => {
  return (
    <div className={`${style.card} card`}>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/486/591/731/space-galaxy-nasa-spitzer-space-telescope-wallpaper-preview.jpg"
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
