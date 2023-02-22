import React from 'react';
import styles from './Header.module.scss'



const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.nav}>
                <a href={''}>Home</a>
                <a href={''}>Skills</a>
                <a href={''}>Portfolio</a>
                <a href={''}>Contacts</a>
            </div>
        </div>
    );
};

export default Header;