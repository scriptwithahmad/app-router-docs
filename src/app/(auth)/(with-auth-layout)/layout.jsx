import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1>Inner Layout</h1>
      {children}
    </div>
  );
};

export default layout;
