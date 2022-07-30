import React from "react";
import "./Button.css";
import { Link, useHistory } from "react-router-dom";
export default function Button(props) {
  const history = useHistory();
  const { btnHandler, btnText, link } = props;
  const handleClick = () => {};
  return (
    <div className="btnDiv">
      <button type="submit" className="btn" onClick={() => history.push(link)}>
        {btnText}
      </button>
    </div>
  );
}
