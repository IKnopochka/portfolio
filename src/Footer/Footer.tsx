import React from 'react';
import styles from './Footer.module.scss'
import stylesContainer from "../Common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
                <h2 className={stylesContainer.title}>Iryna Nisnevich</h2>
                <div className={styles.footerPic}>
                    <div className={styles.imageContainer}></div>
                    <div className={styles.imageContainer}></div>
                    <div className={styles.imageContainer}></div>
                    <div className={styles.imageContainer}></div>
                </div>
                <h3 className={stylesContainer.title}>©2022 All Rights Reserved</h3>
            </div>
        </div>
    );
};

export default Footer;