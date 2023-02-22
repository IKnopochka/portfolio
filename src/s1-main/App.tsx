import React from 'react';
import styles from './App.module.scss';
import Header from "../s2-features/f0-header/Header";
import Main from "../s2-features/f1-main/Main";
import Skills from "../s2-features/f2-skills/Skills";
import Portfolio from "../s2-features/f3-portfolio/Portfolio";
import Contacts from "../s2-features/f4-contacts/Contacts";
import Footer from "../s2-features/f5-footer/Footer";

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
