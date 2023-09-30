// Importando os módulos
import PropTypes from "prop-types";
import React, { createContext, useContext, useEffect, useState } from "react";

// Variável para receber a criação do contexto
const PersonContext = createContext({});

// Função do contexto
export const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState([]);

  // Função para atualizar o localStorage
  const putPersonData = async (infoPerson) => {
    setPerson(infoPerson);

    await localStorage.setItem("person:Person", JSON.stringify(infoPerson));
  };

  // Função dentro do useEffect para carregar o localStorage quando sofrer alteração
  useEffect(() => {
    const loadPerson = async () => {
      const personInfor = await localStorage.getItem("person:Person");

      if (personInfor) {
        setPerson(JSON.parse(personInfor));
      }
    };

    loadPerson();
  }, []);

  // Retorno do contexto
  return (
    <PersonContext.Provider value={{ putPersonData, person, setPerson }}>
      {children}
    </PersonContext.Provider>
  );
};

// Exportando o contexto
export const usePerson = () => {
  const context = useContext(PersonContext);
  if (!context) {
    throw new Error("usePerson must be used with Personcontext");
  }
  return context;
};

// Prototipando o children
PersonProvider.propTypes = {
  children: PropTypes.node,
};
