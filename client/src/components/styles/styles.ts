import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
        /* transition: all 0.75s ease; */
        border-radius: 4px;

        a{
            text-decoration: none;
        }
    }

    body {
        background-color: black;
        color: white;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        letter-spacing: 0.1rem;
        margin: 0;
    }
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin: 0;
  width: 100%;
  height: 100vh;
  border: thin solid red;
`;

export const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 1rem 1rem;

  margin: 1rem;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 10rem;
  border: thin solid white;
  text-align: center;
  justify-content: center;

  :hover {
    border: thin solid red;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  margin: 0;
  width: 100%;
  height: auto;
  border: thin solid white;
  text-align: center;
  justify-content: center;
`;

export const Select = styled.select`
  width: auto;
  height: auto;
  color: white;
  background-color: black;
  border: thin solid white;
  text-align: center;
  margin: 1rem 1rem 1rem 0rem;
  padding: 15px 32px;

  &:hover {
    border: thin solid red;
    box-shadow: 0px 0px 7px 0.5px black;
  }
`;

export const Button = styled.button`
  border: thin solid white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 1rem 1rem 1rem 0rem;
  padding: 15px 32px;

  color: white;
  background-color: black;

  &:hover {
    border: thin solid red;
    box-shadow: 0px 0px 7px 0.5px black;
  }
`;

export const Input = styled.input`
  width: 25rem;
  height: 3rem;
  background-color: white;
`;
