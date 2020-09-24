import React from "react";

import "./App.css";
import { Layout } from "./Components/Layout/Layout";
import Icecreambuilder from "./Container/Icecreambuilder/Icecreambuilder";

function App() {
  return (
    <div className="App">
      <Layout>
        <Icecreambuilder />
      </Layout>
    </div>
  );
}

export default App;
