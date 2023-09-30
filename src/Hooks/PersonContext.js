import PropTypes from "prop-types";
import React, { createContext, useContext, useEffect, useState } from "react";

const PersonContext = createContext({});

export const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState([]);

  const putPersonData = async (infoPerson) => {
    setPerson(infoPerson);

    await localStorage.setItem("person:Person", JSON.stringify(infoPerson));
  };

  useEffect(() => {
    const loadPerson = async () => {
      const personInfor = await localStorage.getItem("person:Person");

      if (personInfor) {
        setPerson(JSON.parse(personInfor));
      }
    };

    loadPerson();
  }, []);

  return (
    <PersonContext.Provider
      value={{ putPersonData, person, setPerson }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export const usePerson = () => {
  const context = useContext(PersonContext);
  if (!context) {
    throw new Error("usePerson must be used with Personcontext");
  }
  return context;
};

PersonProvider.propTypes = {
  children: PropTypes.node,
};
