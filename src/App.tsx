import React from "react";
import { Route, Routes } from "react-router-dom";

import "./app.css";
import Contacts from "./views/contacts";
import Customers from "./views/customers";
import Sites from "./views/sites";
import Welcome from "./views/welcome";

const App = () => {
  return (
    <Routes>
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/sites" element={<Sites />} />
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
};

export default App;
