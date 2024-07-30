import { ChevronRightIcon } from "@radix-ui/react-icons";
import * as Label from "@radix-ui/react-label";
import type { FC } from "react";
import type { continentId } from "../continentCarousel/ContinentCarousel";
import { ContinentSelector } from "../continentSelector/ContinentSelector";
import "./ContinentSelectionCta.css";

interface Props {
  selectedContinentId: continentId;
  setSelectedContinentId: (continentId: continentId) => void;
}

export const ContinentSelectionCta: FC<Props> = ({
  selectedContinentId,
  setSelectedContinentId,
}) => {
  return (
    <div className="continent-select">
      <Label.Root htmlFor="continent-select">Explore</Label.Root>
      <ContinentSelector
        selectedContinentId={selectedContinentId}
        setSelectedContinentId={setSelectedContinentId}
      />
      <button className="go-button" type="button">
        <ChevronRightIcon className="go-button-icon" />
      </button>
    </div>
  );
};
