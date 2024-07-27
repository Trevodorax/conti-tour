import { useState } from "react";
import "./ConceptPresentation.css";

import environmentLogo from "/landing-page-presentation/environment-logo.svg";
import itineraryLogo from "/landing-page-presentation/itinerary-logo.svg";
import workLogo from "/landing-page-presentation/work-logo.svg";
import environmentImage from "/landing-page-presentation/environment-image.jpg";

import classNames from "classnames";

type presentationItem = "work" | "environment" | "itinerary";

const presentationItems: Array<{
  id: presentationItem;
  shortText: string;
  longText: string;
  logo: string;
  image: string;
}> = [
  {
    id: "work",
    shortText: "Work while you travel",
    longText:
      "Don't stop work get in the way of your travel plans. Keep working while you travel. We will always provide you with the best working conditions, everywhere you go.",
    logo: workLogo,
  },
  {
    id: "environment",
    shortText: "Protect the planet",
    longText:
      "Travelling doesn't have to be harmful to the planet. We will help you to travel in a sustainable way, protecting the environment and the local communities.",
    logo: environmentLogo,
  },
  {
    id: "itinerary",
    shortText: "See the real world",
    longText:
      "The point of a conti-tour is not to stay in one place. We will help you find the best places to visit for you, do the best activities where you go, and meet people from all around the world.",
    logo: itineraryLogo,
  },
];

export const ConceptPresentation = () => {
    const [selectedItemId, setSelectedItemId] = useState<presentationItem>("work");

  return (
    <div className="cards-container">
      {presentationItems.map((item) => (
        <div onClick={() => setSelectedItemId(item.id)} key={item.id} className={classNames("concept-presentation-item", {"selected": item.id === selectedItemId})}>
          <img src={item.logo} alt={item.shortText} />
          <h3>{item.shortText}</h3>
        </div>
      ))}
    </div>
  );
};
