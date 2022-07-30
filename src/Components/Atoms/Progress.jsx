import React from "react";
import "./Progress.css";
export default function Progress(props) {
  const {
    colored,
    progress1,
    progress2,
    progress3,
    progress4,
    progress1Line,
    progress1Line1,
    progress2Line,
    progress2Line2,
    progress3Line,
    progress3Line3,
  } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={progress1 ? "progress1" : "not-in-progress"}>1</div>
      <div className={progress1Line ? "line" : "line2"}></div>
      <div className={progress1Line1 ? "line" : "line2"}></div>
      <div className={progress2 ? "progress1" : "not-in-progress"}>2</div>
      <div className={progress2Line ? "line" : "line2"}></div>
      <div className={progress2Line2 ? "line" : "line2"}></div>
      <div className={progress3 ? "progress1" : "not-in-progress"}>3</div>
      <div className={progress3Line ? "line" : "line2"}></div>
      <div className={progress3Line3 ? "line" : "line2"}></div>
      <div className={progress4 ? "progress1" : "not-in-progress"}>4</div>
    </div>
  );
}
