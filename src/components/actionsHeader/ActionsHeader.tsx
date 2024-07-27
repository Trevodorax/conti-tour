import { PersonIcon } from "@radix-ui/react-icons";
import type { FC } from "react";
import logo from "/logo.svg";
import "./ActionsHeader.css";

type action = "account";

interface Props {
  endActions: action[];
}

export const ActionsHeader: FC<Props> = ({ endActions }) => {
  return (
    <div className="actions-header">
      <div className="actions-header-start">
        <img src={logo} alt="logo" className="icon" />
      </div>
      <div className="actions-header-end">
        {endActions.includes("account") && (
          <button className="round-icon-container" type="button">
            <PersonIcon className="icon" />
          </button>
        )}
      </div>
    </div>
  );
};
