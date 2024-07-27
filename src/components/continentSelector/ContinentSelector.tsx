import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import type { FC } from "react";
import {
  type continentId,
  continents,
  getContinentById,
} from "../continentCarousel/ContinentCarousel";
import "./ContinentSelector.css";

interface Props {
  selectedContinentId: continentId;
  setSelectedContinentId: (continentId: continentId) => void;
}

export const ContinentSelector: FC<Props> = ({
  selectedContinentId,
  setSelectedContinentId,
}) => {
  return (
    <Select.Root
      defaultValue={selectedContinentId}
      onValueChange={setSelectedContinentId}
    >
      <Select.Trigger className="select-trigger">
        <div className="select-value">
          <Select.Value>
            {getContinentById(selectedContinentId)?.label}
          </Select.Value>
        </div>
        <Select.Icon>
          <ChevronDownIcon className="dropDownIcon" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="select-content"
          side="bottom"
          position="popper"
          align="center"
        >
          <Select.Viewport>
            {continents.map((continent) => (
              <Select.Item
                className="select-item"
                key={continent.id}
                value={continent.id}
                onMouseEnter={() => setSelectedContinentId(continent.id)}
                onClick={() => {
                  setSelectedContinentId(continent.id);
                }}
                onKeyDown={() => setSelectedContinentId(continent.id)}
              >
                <Select.ItemText>
                  <div className="select-item-text">{continent.label}</div>
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
