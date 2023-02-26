import React, {FC} from 'react'
import burgerIcon from './burger.png'
import s from './NavBar.module.scss'

type PropsType = {
    handleOpen: () => void
}

export const NavBar: FC<PropsType> = ({handleOpen}) => {
    return (
            <div>
                <img
                    src={burgerIcon}
                    className={s.burgerMenuIcon}
                    onClick={handleOpen}
                    alt={'open menu'}
                />
            </div>
    )
}
