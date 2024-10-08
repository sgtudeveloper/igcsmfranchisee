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
import BlogTemplate from "./Components/Blogs/BlogTemplate";
import Courses from "./Components/Courses";
import Form from "./Components/Form";

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
              path="/about"
              element={
                <>
                  {/* <Navbar /> */}
                  <Form />
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
              path="/courses"
              element={
                <>
                  {/* <Navbar /> */}
                  <Courses/>
                </>
              }
            />
            <Route
              path="/blog"
            >
              <Route path="/blog" element={<BlogPage/>}/>
              <Route path="/blog/1" element={<BlogTemplate/>}/>
              </Route>
          </Routes>
          <Footer />
        </Router>
      </BlogState>
    </>
  );
}

export default App;
