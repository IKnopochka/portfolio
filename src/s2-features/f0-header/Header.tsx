import React, {useState} from 'react';
import styles from './Header.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";
import {NavBar} from "./navBar/NavBar";
import {Sidebar} from "./sidebar/Sidebar";


const Header = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    return (


        <div className={styles.header}>
            <NavBar handleOpen={handleOpen}/>
            <Sidebar open={open} handleClose={handleClose}/>
        </div>


    );
};

export default Header;


{/*<div className={styles.nav}>*/}
{/*    <Link*/}
{/*        activeClass={styles.active}*/}
{/*        to="main"*/}
{/*        spy={true}*/}
{/*        smooth={true}*/}
{/*        offset={0}*/}
{/*        duration={500}*/}
{/*    >Home</Link>*/}
{/*    <Link*/}
{/*        activeClass={styles.active}*/}
{/*        to="skills"*/}
{/*        spy={true}*/}
{/*        smooth={true}*/}
{/*        offset={0}*/}
{/*        duration={500}*/}
{/*    >Skills</Link>*/}
{/*    <Link*/}
{/*        activeClass={styles.active}*/}
{/*        to="portfolio"*/}
{/*        spy={true}*/}
{/*        smooth={true}*/}
{/*        offset={0}*/}
{/*        duration={500}*/}
{/*    >Portfolio</Link>*/}
{/*    <Link*/}
{/*        activeClass={styles.active}*/}
{/*        to="contacts"*/}
{/*        spy={true}*/}
{/*        smooth={true}*/}
{/*        offset={0}*/}
{/*        duration={500}*/}
{/*    >Contacts</Link>*/}
{/*</div>*/}