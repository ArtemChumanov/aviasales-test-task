import React, { Suspense } from "react";
import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <div>
      <GlobalStyles />
      <BrowserRouter>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
