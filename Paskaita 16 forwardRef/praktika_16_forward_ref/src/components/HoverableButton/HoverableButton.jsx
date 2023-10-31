import React, { forwardRef } from "react";

function HoverableButton({ text, onHover, className }, ref) {
  return (
    <div>
      <button ref={ref} onMouseOver={onHover} className={className}>
        {text}
      </button>
    </div>
  );
}

export default forwardRef(HoverableButton);
