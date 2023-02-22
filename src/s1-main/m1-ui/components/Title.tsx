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
            <h2>{props.mainTitle}</h2>
            <div>
                <span>{props.subPronounWord}</span>
                <b>{props.subMainWord}</b>
            </div>
        </div>
    );
};

export default Title;