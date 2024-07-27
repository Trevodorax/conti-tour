import { useState } from "react";
import "./App.css";
import {
  ContinentCarousel,
  type continentId,
} from "./components/continentCarousel/ContinentCarousel";
import { ContinentSelector } from "./components/continentSelector/ContinentSelector";
import { ContinentSelectionCta } from "./components/continentSelectionCta/ContinentSelectionCta";

function App() {
  const [selectedContinentId, setSelectedContinentId] =
    useState<continentId>("africa");

  return (
    <div className="continentZone">
      <ContinentSelectionCta
        selectedContinentId={selectedContinentId}
        setSelectedContinentId={setSelectedContinentId}
      />
      <ContinentSelector
        selectedContinentId={selectedContinentId}
        setSelectedContinentId={setSelectedContinentId}
      />
      <ContinentCarousel selectedContinentId={selectedContinentId} />
    </div>
  );
}

export default App;
