import React from "react";
import styled from "styled-components";

function Rules() {
  return (
    <>
      <RulesContainer>
        <h1>Rules for playing the Dice Game!</h1>
        <p>Select any Number.</p>
        <p>Click on the Dice.</p>
        <p>
          If the selected number matches the Dice, you will score points same as
          the Dice otherwise 2 points will be deducted.
        </p>
      </RulesContainer>
    </>
  );
}

const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 15px;
  border-radius: 5px;
  background-color: #a9a9a9;
`;

export default Rules;
