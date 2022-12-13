import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.main}>
            <h2 className={styles.mainTitle}>Iryna Nisnevich</h2>
            <div className={styles.footerPic}>
                <div className={styles.imageContainer}></div>
                <div className={styles.imageContainer}></div>
                <div className={styles.imageContainer}></div>
                <div className={styles.imageContainer}></div>
            </div>
            <h3 className={styles.title}>©2022 All Rights Reserved</h3>
        </div>

    );
};

export default Footer;