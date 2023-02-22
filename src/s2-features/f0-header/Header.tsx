import React from 'react';
import styles from './Header.module.scss'
import { Link, animateScroll as scroll } from "react-scroll";


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.nav}>
                {/*<a href={''}>Home</a>*/}
                {/*/!*<a href={'#skills'}>Skills</a>*!/*/}
                {/*<a href={'#portfolio'}>Portfolio</a>*/}
                {/*<a href={'#contacts'}>Contacts</a>*/}
                <Link
                    activeClass={styles.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Home</Link>
                <Link
                    activeClass={styles.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={styles.active}
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Portfolio</Link>
                <Link
                    activeClass={styles.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Contacts</Link>
            </div>
        </div>
    );
};

export default Header;