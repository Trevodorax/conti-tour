import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ActionsHeader } from "../../components/actionsHeader/ActionsHeader";
import { ConceptPresentation } from "./components/conceptPresentation/ConceptPresentation";
import { continentId, ContinentCarousel } from "./components/continentCarousel/ContinentCarousel";
import { ContinentSelectionCta } from "./components/continentSelectionCta/ContinentSelectionCta";
import { ContinentSelector } from "./components/continentSelector/ContinentSelector";
import { useTheme } from "../../contexts/internalContexts/themeContext";
import './Landing.css';

export const Landing = () => {
  const [selectedContinentId, setSelectedContinentId] =
    useState<continentId>("africa");
  
  const {setTheme} = useTheme();
  
  useEffect(() => {
    setTheme(selectedContinentId);
  }, [selectedContinentId]);

  return (
    <div className="landing-page">
      <ActionsHeader endActions={["account"]} />
      <div className="continent-zone">
        <ContinentSelectionCta
          selectedContinentId={selectedContinentId}
          setSelectedContinentId={setSelectedContinentId}
        />
        <ContinentSelector
          selectedContinentId={selectedContinentId}
          setSelectedContinentId={setSelectedContinentId}
        />
        <ContinentCarousel
          selectedContinentId={selectedContinentId}
          setSelectedContinentId={setSelectedContinentId}
        />
      </div>
      <div className="concept-presentation">
        <ConceptPresentation />
        <Link to="/about" className="[&.active]:font-bold">
            Home
        </Link>{' '}
      </div>
    </div>
  );
}
