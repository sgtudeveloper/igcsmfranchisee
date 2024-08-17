import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./index.css";
import Contact from "./Components/Contact";
import BlogState from "./Context/BlogState";
import BlogPage from "./Components/BlogPage";

function App() {
  return (
    <>
      <BlogState>
        <Router>
          <Navbar />
          {/* Routes here */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <Navbar /> */}
                  <Home />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  {/* <Navbar /> */}
                  <Contact />
                </>
              }
            />
            <Route
              path="/blog"
              element={
                <>
                  {/* <Navbar /> */}
                  <BlogPage/>
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </BlogState>
    </>
  );
}

export default App;
