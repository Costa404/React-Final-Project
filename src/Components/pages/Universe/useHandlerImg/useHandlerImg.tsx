import { useState } from "react";
import { useProducts } from "../ProductsFetch";

const useHandlerImg = () => {
  const { universeImg } = useProducts();
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);
  const [expandedDescription, setExpandedDescription] = useState<string | null>(
    null
  );

  const handleImageClick = (img: {
    url: string;
    title: string | undefined;
    description?: string | undefined;
  }) => {
    setExpandedImage(img.url);
    setExpandedTitle(img.title || "Título Padrão");
    setExpandedDescription(img.description || "Descrição Padrão");
  };

  const handleClose = () => {
    setExpandedImage(null);
    setExpandedTitle(null);
    setExpandedDescription(null);
  };

  return {
    handleClose,
    handleImageClick,
    expandedDescription,
    expandedTitle,
    expandedImage,
    universeImg,
  };
};

export default useHandlerImg;
