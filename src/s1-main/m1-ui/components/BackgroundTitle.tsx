import React from 'react';
import styles from './BackgroundTitle.module.scss';

type backgroundPropsType = {
    title: string
    side: "left" | "right"
}

const BackgroundTitle = (props: backgroundPropsType) => {
    return (<div>
            <div className={styles.bgTitle}>
                <span>{props.title}</span>
            </div>
            {props.side === 'left' ?
                <div className={styles.vLineBlockLeft}>
                    <span></span>
                </div> :
                <div className={styles.vLineBlockRight}>
                    <span></span>
                </div>
            }
        </div>

    );
};

export default BackgroundTitle;