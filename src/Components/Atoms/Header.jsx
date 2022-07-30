import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div style={{ display: "flex" }}>
      <img src="../Page_Logo.png" className="image" />
      <h2 className="companyName">Eden</h2>
    </div>
  );
}
