
// Importando os módulos
import PropTypes from "prop-types";
import React from "react";

// Importação do contexto 
import { PersonProvider } from "./PersonContext";

// Disponibilizando o contexto
const Provider = ({ children }) => <PersonProvider>{children}</PersonProvider>;

// Prototipando o children
Provider.propTypes = {
  children: PropTypes.node,
};

// Exportando
export default Provider;
