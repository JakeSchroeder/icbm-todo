import React from "react";

import "../styles/side.scss";
import { Close20 as Close, ArrowRight16 as Arrow } from "@carbon/icons-react";

import { Button } from "carbon-components-react";

const Side = () => {
  return (
    <>
      <div className="side--overlay"></div>
      <aside className="side">
        <div className="side--nav">
          <h4>Add Todo</h4>
          <button aria-label="close" className="side--close" type="button">
            <Close />
          </button>
        </div>
        <div className="side--wrapper">
          <div className="side--content">thing</div>
        </div>
        <div className="side--footer">
          <Button kind="secondary">Cancel</Button>
          <Button renderIcon={Arrow}>Create Todo</Button>
        </div>
      </aside>
    </>
  );
};

export default Side;
