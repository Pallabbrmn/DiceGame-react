// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";

function RollDice({
  handleMouseOver,
  handleMouseOut,
  handleReset,
  rollDice,
  currentDice,
}) {
  return (
    <>
      <Container>
        <div className="dice-section">
          <img
            onClick={rollDice}
            src={`/images/dice_${currentDice}.png`}
            alt="dice1"
          />
          <div className="para">
            <p>Click on the Dice to Roll</p>
          </div>
          <Button onClick={handleReset}>Reset Score</Button>
          <Button
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            black={true}
          >
            Show Rules
          </Button>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .dice-section {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 250px;
    gap: 10px;
  }

  img {
    cursor: pointer;
  }

  .para {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .para p {
    font-size: 20px;
  }
`;

const Button = styled.button`
  height: 50px;
  width: 100%;
  border: 1px solid black;
  cursor: pointer;
  font-size: 15px;
  border-radius: 3px;
  background-color: ${(props) => (props.black ? "black" : "white")};
  color: ${(props) => (!props.black ? "black" : "white")};

  &:hover {
    background-color: ${(props) => (!props.black ? "black" : "white")};
    color: ${(props) => (props.black ? "black" : "white")};
  }
`;

export default RollDice;
