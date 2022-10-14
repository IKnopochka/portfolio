import React from 'react';
import styles from './Main.module.css'
import containerStyles from './../Common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={containerStyles.container}>
                <div className={styles.text}>
                    <span>Hi there</span>
                    <h1>I am Iryna Nisnevich</h1>
                    <p>front-end developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
};

export default Main;