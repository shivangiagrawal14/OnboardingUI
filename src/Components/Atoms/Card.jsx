import React from "react";
import "./Card.css";
export default function Card(props) {
  const { src, text, description, handleChange, isSelected, identifier } =
    props;

  const handleClick = () => {
    handleChange(identifier);
  };
  return (
    <div className="card " onClick={handleClick}>
      <img src={src} />
      <h4 className="heading">{text}</h4>
      <div className="desc">{description}</div>
    </div>
  );
}
