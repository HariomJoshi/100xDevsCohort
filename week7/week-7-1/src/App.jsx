import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import React, { Suspense } from "react";
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";

const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

// we can directly destructure lazy from import and use it directly instead of React.lazy

function App() {
  return (
    <div>
      {/* below is the topbar which remains constant, everything below changes */}
      <BrowserRouter>
        {/* app bar is inside browser router, due to which useNavigate is also used inside browserRouter */}
        <AppBar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback="Loading..">
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback="Loading..">
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div style={{ background: "Blue", color: "white" }}>
      <button
        onClick={() => {
          // we can go to a route on clicking as follows
          // but this does not uses client side routing
          // window.location.href = "/dashboard";
          // above is not the right way
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>

      <button
        onClick={() => {
          // window.location.href = "/";
          navigate("/");
        }}
      >
        Home
      </button>
    </div>
  );
}

export default App;
