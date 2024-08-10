import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import RefreshHandler from "./utils/RefreshHandler";
import { useState } from "react";
import Layout from "./pages/Layout";
import RegistrationData from "./pages/RegistrationData";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Layout>
                <Home />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/data"
          element={
            <Layout>
              <RegistrationData />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
