import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/onePage/home/Home";
import Services from "./components/onePage/services/Services";
import AboutUs from "./components/onePage/aboutUs/aboutus";
import Footer from "./components/onePage/footer/footer";
import Login from "./components/login";
import ProjectsList from "./components/onePage/ourProjects/projectsList";
import NavbarWithScroll from "./components/onePage/navBar/NavbarWithScroll";
import ContactUs from "./components/onePage/contactus/contactUs";
import Chatbot from "./components/chatbot/Chatbot";

function App() {
  return (
    <div className="app">
      <Router>
        <NavbarWithScroll />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>
                <Chatbot />
                <section id="services">
                  <Services />
                </section>
                <section id="ourprojects">
                  <ProjectsList/>
                </section>
                <section id="aboutus">
                  <AboutUs />
                </section>
                <section id="contactus">
                  <ContactUs />
                </section>
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;