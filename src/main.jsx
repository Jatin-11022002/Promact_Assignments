import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import EmployeeForm from "./components/EmployeeForm";
import ListOfEmployees from "./components/ListOfEmployees";
import Layout from "./Layout";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/add" element={<Layout component={EmployeeForm} />} />
        <Route path="/edit/:id" element={<Layout component={EmployeeForm} />} />
        <Route path="/list" element={<Layout component={ListOfEmployees} />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
