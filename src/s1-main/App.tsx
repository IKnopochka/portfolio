import React from 'react';
import styles from './App.module.scss';
import Header from "../s2-features/f0-header/Header";
import Main from "../s2-features/f1-main/Main";
import Skills from "../s2-features/f2-skills/Skills";
import Portfolio from "../s2-features/f3-portfolio/Portfolio";
import Contacts from "../s2-features/f4-contacts/Contacts";
import Footer from "../s2-features/f5-footer/Footer";
import {storePropsType} from "./m2-bll/store";

function App({store}: { store: storePropsType }) {
    return (
        <div className={styles.App}>
            <Header/>
            <Main main={store.main}/>
            <Skills skills={store.skills}/>
            <Portfolio portfolio={store.portfolio}/>
            <Contacts contacts={store.contacts}/>
            <Footer/>
        </div>
    );
}

export default App;