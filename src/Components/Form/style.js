//Importação do estilos de componentes

import styled from "styled-components";

// Criando variáveis de cores 
const colorsRoots = {
  colorPrymary: "#663399",
  colorSecondary: "#7D7E7E",
  colorWhite: "#ffff",
};

// Estilo do formulário
const FormStyle = styled.form`
  gap: 15px;
  display: flex;
  flex-direction: column;
  width: 80%;

  h2 {
    border-bottom: 1px solid ${colorsRoots.colorSecondary};
    margin-bottom: 25px;
    padding-bottom: 9px;
    color: ${colorsRoots.colorSecondary};
  }
  button {
    width: 100%;
  }

  i {
    color: ${colorsRoots.colorPrymary};
  }

  button[value="Cadastrar"] {
    margin-left: 35px;
    width: auto;
    color: ${colorsRoots.colorPrymary};
    border: 1px solid ${colorsRoots.colorPrymary};
    &:hover {
      background: ${colorsRoots.colorPrymary};
      color: ${colorsRoots.colorWhite};
    }
  }
  .container-input {
    display: flex;
    gap: 10px;
    width: 100%;
  }

  // Eslilod dos inputs
  .input {
    outline: none;
    color: ${colorsRoots.colorSecondary} !important;
    background: transparent;
    border: none;
    border-bottom: 1px solid ${colorsRoots.colorSecondary};

    ::-webkit-calendar-picker-indicator {
      filter: invert(1); /* Inverte a cor do ícone do calendário */
      color: gray;
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    // Estilo do placeholder
    &::-webkit-input-placeholder {
      color: ${colorsRoots.colorSecondary} !important;
    }

    // Eltilos do focus
    &:focus {
      box-shadow: none;
      box-shadow: bottom 0 0 50px ${colorsRoots.colorWhite} !important;
      border: none !important;
      border-bottom: 2px solid ${colorsRoots.colorPrymary} !important;
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
