import React, {FC} from 'react'
import s from './Sidebar.module.scss'

import closeIcon from './closeOutline.png'

import {Link} from "react-scroll";

type PropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const sidebarClass = s.sidebar + (open ? ' ' + s.open : '')
    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <button className={s.close} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                    />
                </button>
                <div className={s.nav}>
                    <div className={s.menu}>
                        <Link
                            activeClass={s.active}
                            to="main"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={handleClose}
                        >Home</Link>
                        <Link
                            activeClass={s.active}
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={handleClose}
                        >Skills</Link>
                        <Link
                            activeClass={s.active}
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={handleClose}
                        >Portfolio</Link>
                        <Link
                            activeClass={s.active}
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={handleClose}
                        >Contacts</Link>
                        <div className={s.vLineBlock}>
                            <span></span>
                        </div>
                    </div>

                </div>


            </aside>

        </>
    )
}
