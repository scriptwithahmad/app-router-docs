import React from "react";

const Card = ({ children }) => {
  const cardStyle = {
    padding: "80px",
    border: "1px solid red",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
