import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Suspense fallback={<h1>loading route …</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
        ;
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
