import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import AppContainer from "./container/Container";

const App = () => {
  return <AppContainer />
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);