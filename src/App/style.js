import styled from "styled-components";

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;
  font-size: 2rem;
  color: white;

  .buttons {
    display: flex;
    gap: 15px;
  }
`;
export { Container };
