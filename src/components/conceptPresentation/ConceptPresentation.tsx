import './ConceptPresentation.css'

import environmentImage from "/landing-page-presentation/environment.svg";
import itineraryImage from "/landing-page-presentation/itinerary.svg";
import workImage from "/landing-page-presentation/work.svg";

type presentationItem = "work" | "environment" | "itinerary";

const presentationItems: Array<{
  id: presentationItem;
  shortText: string;
  longText: string;
  image: string;
}> = [
  {
    id: "work",
    shortText: "Keep working while you travel",
    longText: "Don't stop work get in the way of your travel plans. Keep working while you travel. We will always provide you with the best working conditions, everywhere you go.",
    image: workImage,
  },
  {
    id: "environment",
    shortText: "Protect the planet",
    longText: "Travelling doesn't have to be harmful to the planet. We will help you to travel in a sustainable way, protecting the environment and the local communities.",
    image: environmentImage,
  },
  {
    id: "itinerary",
    shortText: "Discover the world",
    longText: "The point of a conti-tour is not to stay in one place. We will help you find the best places to visit for you, do the best activities where you go, and meet people from all around the world.",
    image: itineraryImage,
  },
];

export const ConceptPresentation = () => {
    return (
        <div>Presentation here</div>
    )
}