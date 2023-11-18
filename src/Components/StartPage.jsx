// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function StartPage({ toggle }) {
  return (
    <Container>
      <div>
        <img src="/images/dices1.png" alt="dice-photo" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <div className="btn">
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-size: 6vw;
    word-wrap: unset;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
  .content .btn {
    display: flex;
    justify-content: end;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  font-size: 16px;
  height: 40px;
  width: 200px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export default StartPage;
