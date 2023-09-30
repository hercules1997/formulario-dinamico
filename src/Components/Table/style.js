import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 15px;
    width: 100%;
  }
  .input {
    outline: none;
    color: #ffff !important;
    background: transparent;
    margin: 20px 0;
    padding: 8px;
    font-size: 1.2rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 34%;
    border: none;
    border-bottom: 1px solid gray;
    // Estilo do placeholder
    &::-webkit-input-placeholder {
      color: gray !important;
    }

    // Eltilos do focus
    &:focus {
      border: solid rebeccapurple 1px;
    }
  }

  // Estilização da tabela
  .tabela {
    width: 100%;
    font-size: 1.2rem;

    thead {
      border-bottom: 1px solid gray;
      color: gray;
    }
    tr {
      border-bottom: 1px solid gray;
    }
    td {
      padding: 15px;
    }
  }
`;

export { Container };
