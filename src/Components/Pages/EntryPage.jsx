import React from "react";
import Description from "../Atoms/Description";
import Header from "../Atoms/Header";
import InputBox from "../Atoms/InputBox";
import Button from "../Atoms/Button";
import { useState, createContext, useContext } from "react";
import "./Pages.css";
import Progress from "../Atoms/Progress";
import { DashboardContext } from "./AppContextProvider";

var userDetailContext = createContext("");
export default function EntryPage(props) {
  const { inputs, setInputs } = useContext(DashboardContext);
  const values = { inputs };
  const handleChange = (name, value) => {
    console.log(inputs);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <userDetailContext.Provider value={values}>
      <div className="pages">
        <Header />
        <div className="progress">
          <Progress
            colored={false}
            progress1={true}
            progress2={false}
            progress3={false}
            progress4={false}
            progress1Line={true}
            progress1Line1={false}
            progress2Line={false}
            progress2Line2={false}
            progress3Line={false}
            progress3Line3={false}
          />
        </div>
        <Description
          mainHeading="Welcome! First things first..."
          subHeading="You can always change them later"
        />
        <InputBox
          value={inputs.fullName}
          name="fullName"
          className="firstInputBox"
          placeholder="Steve Jobs"
          label="Full Name"
          handleChange={handleChange}
        />
        <InputBox
          value={inputs.displayName}
          name="displayName"
          placeholder="Steve"
          label="Display Name"
          handleChange={handleChange}
        />
        <Button btnText="Create Workspace" link="/second" />
      </div>
    </userDetailContext.Provider>
  );
}
