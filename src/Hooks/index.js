import PropTypes from "prop-types";
import React from "react";

import { PersonProvider } from "./PersonContext";

const Provider = ({ children }) => <PersonProvider>{children}</PersonProvider>;

Provider.propTypes = {
  children: PropTypes.node,
};

export default Provider;
