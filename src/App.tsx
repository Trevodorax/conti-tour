import { useState } from "react";
import "./App.css";
import { ActionsHeader } from "./components/actionsHeader/ActionsHeader";
import { ConceptPresentation } from "./components/conceptPresentation/ConceptPresentation";
import {
  ContinentCarousel,
  type continentId,
} from "./components/continentCarousel/ContinentCarousel";
import { ContinentSelectionCta } from "./components/continentSelectionCta/ContinentSelectionCta";
import { ContinentSelector } from "./components/continentSelector/ContinentSelector";

function App() {
  const [selectedContinentId, setSelectedContinentId] =
    useState<continentId>("africa");

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
      </div>
    </div>
  );
}

export default App;
