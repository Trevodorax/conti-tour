import { ChevronRightIcon } from "@radix-ui/react-icons";
import * as Label from "@radix-ui/react-label";
import { useState } from "react";
import "./App.css";
import {
  ContinentCarousel,
  type continentId,
} from "./components/continentCarousel/ContinentCarousel";
import { ContinentSelector } from "./components/continentSelector/ContinentSelector";

function App() {
  const [selectedContinentId, setSelectedContinentId] =
    useState<continentId>("africa");

  return (
    <div className="continentZone">
      <div className="continent-select">
        <Label.Root htmlFor="continent-select">Explore</Label.Root>
        <ContinentSelector
          selectedContinentId={selectedContinentId}
          setSelectedContinentId={setSelectedContinentId}
        />
        <button className="go-button">
          <ChevronRightIcon className="go-button-icon" />
        </button>
      </div>
      <ContinentSelector
        selectedContinentId={selectedContinentId}
        setSelectedContinentId={setSelectedContinentId}
      />
      <ContinentCarousel selectedContinentId={selectedContinentId} />
    </div>
  );
}

export default App;
