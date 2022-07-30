import React from "react";
import Description from "../Atoms/Description";
import Header from "../Atoms/Header";
import InputBox from "../Atoms/InputBox";
import Button from "../Atoms/Button";
import { useContext } from "react";
import Progress from "../Atoms/Progress";
import { DashboardContext } from "./AppContextProvider";
import "./Pages.css";

export default function FourthPage() {
  console.log(DashboardContext);
  const inputs = useContext(DashboardContext).inputs;
  console.log(inputs);
  return (
    <div className="pages">
      <Header />
      <div className="progress">
        <Progress
          colored={false}
          progress1={true}
          progress2={true}
          progress3={true}
          progress4={true}
          progress1Line={true}
          progress1Line1={true}
          progress2Line={true}
          progress2Line2={true}
          progress3Line={true}
          progress3Line3={true}
        />
      </div>
      <div className="tick">
        <img src="./completed.png" />
      </div>
      <Description
        mainHeading={`Congratulations, ${inputs.displayName} !`}
        subHeading="You have completed onboarding, you can start using the Eden!"
      />

      <Button btnHandler="" btnText="Launch Eden" />
    </div>
  );
}
