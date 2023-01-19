import React from 'react';
import styles from './App.module.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <Main/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
