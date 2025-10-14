import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import AppRouter from "./AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Navbar />
        <main className="flex-1 lg:ml-64">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
