import React from "react";
import Description from "../Atoms/Description";
import Header from "../Atoms/Header";
import InputBox from "../Atoms/InputBox";
import Button from "../Atoms/Button";
import { useState, useEffect } from "react";
import Progress from "../Atoms/Progress";
import "./Pages.css";
import Card from "../Atoms/Card";
export default function ThirdPage() {
  const [isSelected, setIsSelected] = useState("");

  const handleChange = (identifier) => {
    console.log(identifier);
    setIsSelected(identifier);
  };

  return (
    <div className="pages">
      <Header />
      <div className="progress">
        <Progress
          colored={false}
          progress1={true}
          progress2={true}
          progress3={true}
          progress4={false}
          progress1Line={true}
          progress1Line1={true}
          progress2Line={true}
          progress2Line2={true}
          progress3Line={true}
          progress3Line3={false}
        />
      </div>
      <Description
        mainHeading="How are you planning to use Eden?"
        subHeading="We'll streamline your setup experience accordingly."
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          //   width: "30%",
        }}
      >
        <div
          className={
            isSelected === "individual" ? "selectedCard" : "cardOutside"
          }
        >
          <Card
            handleChange={handleChange}
            identifier="individual"
            src="./individual.png"
            text="For myself"
            description="Write better. Think more clearly. Stay organized."
          />
        </div>
        <div className={isSelected === "team" ? "selectedCard" : "cardOutside"}>
          <Card
            //   selected={isSelected}
            handleChange={handleChange}
            identifier="team"
            src="./community.png"
            text="With my team"
            description="Wikis,docs,tasks & projects, all in one place."
          />
        </div>
      </div>
      <Button btnHandler="" btnText="Create Workspace" link="/fourth" />
    </div>
  );
}
