import React from 'react';
import styles from './Freelance.module.scss'

const Freelance = () => {
    return (
        <div className={styles.main}>
                <h2 className={styles.mainTitle}>Ready for freelance job</h2>
                <button>Hire me</button>
        </div>
    );
};

export default Freelance;