import React from 'react';
import styles from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href={''}>Home</a>
            <a href={''}>Skills</a>
            <a href={''}>Portfolio</a>
            <a href={''}>Resume</a>
            <a href={''}>Contacts</a>
        </div>
    );
};

export default Nav;