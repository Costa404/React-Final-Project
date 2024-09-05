import style from "../Universe.module.css";
import useHandlerImg from "./useHandlerImg";

const HandlerImg = () => {
  const {
    handleClose,
    handleImageClick,
    expandedDescription,
    expandedTitle,
    expandedImage,
    universeImg,
  } = useHandlerImg();

  return (
    <>
      <div className={style.universeImg}>
        {universeImg && universeImg.imgs ? (
          universeImg.imgs.map((img, index) => (
            <div
              key={index}
              className={`${style.image} ${expandedImage ? style.hidden : ""}`}
              onClick={() =>
                handleImageClick({
                  ...img,
                  title: img.title || "Título Padrão",
                })
              }
            >
              <img draggable="false" src={img.url} alt={img.title || "Image"} />
            </div>
          ))
        ) : (
          <p className={style.loadingImg}>Loading images...</p>
        )}
      </div>

      {expandedImage && (
        <div className={style.expanded}>
          <img src={expandedImage} alt="Expanded view" />
          {expandedTitle && <h2>{expandedTitle}</h2>}
          {expandedDescription && <p>{expandedDescription}</p>}
          <button onClick={handleClose} className={style.closeImg}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default HandlerImg;
