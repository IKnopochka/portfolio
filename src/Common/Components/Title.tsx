import React from 'react';
import styles from "./Title.module.scss";

type TitlePropsType = {
    mainTitle: string
    subPronounWord: string
    subMainWord: string
}

const Title = (props: TitlePropsType) => {
    return (
        <div className={styles.titleContainer}>
            <h2 className={styles.mainTitle}>{props.mainTitle}</h2>
            <div className={styles.subTitle}>
                <span className={styles.pronounWord}>{props.subPronounWord}</span>
                <span className={styles.mainWord}>{props.subMainWord}</span>
            </div>
        </div>
    );
};

export default Title;