import React, { Fragment } from "react";

import NormalizeStyles from "./NormalizeStyles";
import BaseStyles from "./BaseStyles";
import AppRoutes from "./Routes";

const App = () => (
  <Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <AppRoutes />
  </Fragment>
);

export default App;
