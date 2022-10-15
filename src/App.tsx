import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import SkillsBlock from "./Skills/SkillsBlock";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <SkillsBlock/>
        </div>
    );
}

export default App;
