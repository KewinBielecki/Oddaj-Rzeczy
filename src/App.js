import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Stats from './Components/Stats/Stats';
import EasySteps from "./Components/EasySteps/EasySteps";
import AboutUs from "./Components/AboutUs/AboutUs";
import FoundationList from "./Components/FoundationList/FoundationList";
import ContactSection from "./Components/ContactSection/ContactSection";

class App extends Component {
    render() {
        return (
            <div className="App">
            <Header />
            <Stats />
            <EasySteps />
            <AboutUs />
            <FoundationList />
            <ContactSection />
        </div>
    );
    }
}

export default App;