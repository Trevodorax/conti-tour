import classNames from "classnames";
import type { FC } from "react";
import africaBackgroundImage from "/africa.jpg";
import asiaBackgroundImage from "/asia.jpg";
import europeBackgroundImage from "/europe.jpg";
import northAmericaBackgroundImage from "/north-america.jpg";
import oceaniaBackgroundImage from "/oceania.jpg";
import southAmericaBackgroundImage from "/south-america.jpg";
import "./ContinentCarousel.css";

export type continentId =
  | "africa"
  | "asia"
  | "europe"
  | "north-america"
  | "oceania"
  | "south-america";

export const continents: Array<{
  id: continentId;
  label: string;
  image: string;
}> = [
  {
    id: "africa",
    label: "Africa",
    image: africaBackgroundImage,
  },
  {
    id: "asia",
    label: "Asia",
    image: asiaBackgroundImage,
  },
  {
    id: "europe",
    label: "Europe",
    image: europeBackgroundImage,
  },
  {
    id: "north-america",
    label: "North America",
    image: northAmericaBackgroundImage,
  },
  {
    id: "oceania",
    label: "Oceania",
    image: oceaniaBackgroundImage,
  },
  {
    id: "south-america",
    label: "South America",
    image: southAmericaBackgroundImage,
  },
];

export function getContinentById(continentId: continentId) {
  return continents.find((continent) => continent.id === continentId);
}

interface Props {
  selectedContinentId: continentId;
}

export const ContinentCarousel: FC<Props> = ({ selectedContinentId }) => {
  return (
    <div className="continents-accordion">
      {continents.map((continent) => (
        <div
          key={continent.id}
          className={classNames("continent-image-container", {
            "current-continent-image": continent.id === selectedContinentId,
          })}
        >
          <img
            src={continent.image}
            alt={continent.label}
            loading="lazy"
            className="continent-image"
          />
        </div>
      ))}
    </div>
  );
};
