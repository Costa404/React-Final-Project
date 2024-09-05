import { useState, useEffect } from "react";

type ImgType = {
  url: string;
  title?: string;
  description?: string;
};

export type DataImg = {
  imgs: ImgType[];
};

export const useProducts = () => {
  const [universeImg, setUniverseImg] = useState<DataImg | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/imgs.json");

        if (!response.ok) {
          throw new Error("Error, try again");
        }

        const data = await response.json();
        setUniverseImg(data);
      } catch (error) {
        console.error("Error fetching data, try again", error);
      }
    };

    fetchProducts();
  }, []);

  return { universeImg };
};

