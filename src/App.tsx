import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Portfolio from "./Projects/Portfolio";
import Resume from "./Freelance/Resume";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className='App'>
            <Header/>
            <Main/>
            <Skills/>
            <Portfolio/>
            <Resume/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
