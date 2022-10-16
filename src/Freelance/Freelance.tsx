import React from 'react';
import styles from './Freelance.module.css'
import stylesContainer from "../Common/styles/Container.module.css";

const Freelance = () => {
    return (
        <div className={styles.main}>
            <div className={`${stylesContainer.container} ${styles.freelanceContainer}`}>
                <h2 className={stylesContainer.title}>Ready for freelance job</h2>
                <button>Hire me</button>
            </div>
        </div>
    );
};

export default Freelance;