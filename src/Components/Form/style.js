//Importação do estilos de componentes
import styled from "styled-components";
// Estilo do formulário
const FormStyle = styled.form`
  gap: 15px;
  display: flex;
  flex-direction: column;
width: 80%;

  button {
    width: 100%;
  }

  button[value="Cadastrar"] {
    margin-left: 35px;
    width: auto;
  }
  .container-input {
    display: flex;
    gap: 10px;
    width: 100%;
  }

  // Eslilod dos inputs
  .input {
    outline: none;
    color: #ffff !important;
    background: transparent;
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

  .buttons {
    justify-content: center;
    margin-left: 35px;
  }
`;

const Divisor = styled.div`
  display: flex;
  width: 100%;
  gap: 2%;
`;
// Exportando
export { FormStyle, Divisor };
