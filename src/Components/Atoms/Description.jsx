import React from "react";
import "./Description.css";
export default function Description(props) {
  const { mainHeading, subHeading } = props;
  return (
    <>
      <h1 className="mainHeading">{mainHeading}</h1>
      <h3 className="subHeading">{subHeading}</h3>
    </>
  );
}
