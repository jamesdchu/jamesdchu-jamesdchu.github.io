import React, { useState } from "react";

const ToggleText = ({ before, after, hidden }) => {
  const [expand, toggleExpand] = useState(false);

  return (
    <>
      {expand ? hidden : <></>}
      <span className="expand" onClick={() => toggleExpand(!expand)}>
        {expand ? after : before}
      </span>
    </>
  );
};

export default ToggleText;