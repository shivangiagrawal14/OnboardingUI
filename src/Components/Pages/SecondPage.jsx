import React from "react";
import Description from "../Atoms/Description";
import Header from "../Atoms/Header";
import InputBox from "../Atoms/InputBox";
import Button from "../Atoms/Button";
import { useState, useEffect } from "react";
import Progress from "../Atoms/Progress";
import "./Pages.css";
export default function SecondPage() {
  const [inputs, setInputs] = useState({ workspaceName: "", url: "" });

  const handleWorkspaceName = (name, value) => {
    console.log(name);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className="pages">
      <Header />
      <div className="progress">
        <Progress
          colored={false}
          progress1={true}
          progress2={true}
          progress3={false}
          progress4={false}
          progress1Line={true}
          progress1Line1={true}
          progress2Line={true}
          progress2Line2={false}
          progress3Line={false}
          progress3Line3={false}
        />
      </div>
      <Description
        mainHeading="Let's set up a home for all your work"
        subHeading="You can always create another workspace later"
      />
      <InputBox
        name="workspaceName"
        className="firstInputBox"
        placeholder="Eden"
        label="Workspace Name"
        handleChange={handleWorkspaceName}
      />
      <div className="inputs">
        <div className="label">
          Workspace URL <span id="optional">(optional)</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.3rem",
          }}
        >
          <div className="urlSample inputBox2">www.eden.com/</div>
          <input
            className="url inputBox3"
            name="displayName"
            placeholder="Example"
            onChange={(e) => {
              console.log(e.target.value);
              setInputs({
                ...inputs,
                url: e?.target?.value,
              });
            }}
          />
        </div>
      </div>
      <Button btnText="Create Workspace" link="/third" />
    </div>
  );
}
