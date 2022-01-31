import styled from "styled-components";

export const Box = styled.div`
  padding: 40px 30px;
  background: black;
  // position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: 3rem;

  @media (max-width: 1000px) {
    padding: 35px 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;

  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-item: center;
  // margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    color: purple;
    transition: 250ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
