import React from 'react';
import styles from './Main.module.scss'

const Main = () => {
    return (
        <div className={styles.block}>
            <div className={styles.text}>
                <span>Hi there</span>
                <h1>I am Iryna Nisnevich</h1>
                <p>front-end developer</p>
            </div>
            <div className={styles.photo}></div>
        </div>

    );
};

export default Main;