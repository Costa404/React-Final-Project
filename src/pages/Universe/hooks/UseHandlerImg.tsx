import { useState } from "react";
import style from "../Universe.module.css";
import { useProducts } from "./useProducts";

import useAnimation from "./useAnimation";

const UseHandlerImg = () => {
  const { percentage, trackRef } = useAnimation();
  const { universeImg } = useProducts();
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);
  const [expandedDescription, setExpandedDescription] = useState<string | null>(
    null
  );

  const handleImageClick = (img: {
    url: string;
    title: string;
    description: string;
  }) => {
    setExpandedImage(img.url);
    setExpandedTitle(img.title);
    setExpandedDescription(img.description);
  };

  const handleClose = () => {
    setExpandedImage(null);
    setExpandedTitle(null);
    setExpandedDescription(null);
  };

  return (
    <div>
      <div
        ref={trackRef}
        style={{ transform: `translate(${percentage}%, -50%)` }}
        className={style.universeImg}
      >
        {universeImg ? (
          universeImg.imgs.map((img, index) => (
            <div
              key={index}
              className={`${style.image} ${expandedImage ? style.hidden : ""}`}
              onClick={() => handleImageClick(img)}
            >
              <img draggable="false" src={img.url} alt={img.title || "Image"} />
            </div>
          ))
        ) : (
          <p>Loading images...</p>
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
    </div>
  );
};

export default UseHandlerImg;
