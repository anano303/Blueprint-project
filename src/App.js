import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import About from "./Pages/About";
import Services from "./Pages/Services";
import LoadingPage from "./Pages/Loading"; // Import the LoadingPage component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by setting a timeout
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 100000); // Adjust the timeout as needed

    return () => clearTimeout(loadingTimeout); // Clear the timeout on component unmount
  }, []);

  return (
    <Router>
      {loading ? ( // Display LoadingPage while loading
        <LoadingPage />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
        </Routes>
      )}
    </Router>
  );
};

export default App;
