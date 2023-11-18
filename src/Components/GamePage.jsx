// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import RollDice from "./RollDice";
import Rules from "./Rules";

function GamePage() {
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(6);
  const [error, setError] = useState("");
  const [onRules, setOnRules] = useState(false);

  const generateRandomNumber = () => {
    let x = Math.floor(Math.random() * 6 + 1);
    return x;
  };

  const rollDice = () => {
    if (!selectedNum) {
      setError("Please select a Number");
      return;
    }
    setError("");
    const randomDice = generateRandomNumber();
    setCurrentDice((prev) => randomDice);

    if (selectedNum === randomDice) {
      setScore((prev) => prev + randomDice);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNum(undefined);
  };

  const handleReset = () => {
    setScore(0);
  };

  const handleDiceClick = (item) => {
    setSelectedNum(item);
    setError("");
  };

  const handleMouseOver = () => {
    setOnRules(true);
    console.log("mouse over");
  };

  const handleMouseOut = () => {
    setOnRules(false);
    console.log("mouse out");
  };

  const nums = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Container onRules={onRules}>
        <TopContainer>
          <div className="left">
            <h1>{score}</h1>
            <p>Total Score</p>
          </div>
          <div className="right">
            <div className="boxes">
              <p>{error}</p>
              {nums.map((item, index) => (
                <Box
                  onClick={() => handleDiceClick(item)}
                  isSelected={item === selectedNum}
                  key={index}
                >
                  {item}
                </Box>
              ))}
            </div>
            <div className="selection">
              <p>Select a Number</p>
            </div>
          </div>
        </TopContainer>
        <div className="diceContent">
          <RollDice
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
            handleReset={handleReset}
            currentDice={currentDice}
            rollDice={rollDice}
          />
          <div className="rules">
            <Rules />
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .diceContent {
    position: relative;
  }

  .rules {
    position: absolute;
    top: 13%;
    left: 10%;
    display: ${(props) => (props.onRules ? "block" : "none")};
  }
`;

const TopContainer = styled.div`
  height: 120px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 24px;
  }

  .left {
    margin-left: 30px;
  }

  .left h1 {
    font-size: 4vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .left p {
    margin-top: -10px;
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
  }

  .right .boxes {
    display: flex;
    gap: 5px;
  }

  .right .boxes p {
    color: red;
  }
  .right .selection {
    display: flex;
    width: 100%;
    justify-content: end;
    margin-top: 10px;
  }
`;

const Box = styled.div`
  height: 70px;
  width: 70px;
  border: 1px solid black;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 800;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  &:hover {
    cursor: pointer;
  }
`;

export default GamePage;
