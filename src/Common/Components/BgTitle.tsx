import React from 'react';
import styles from './BgTitle.module.scss';

type bgTitlePropsType = {
    title: string
}

const BgTitle = (props:bgTitlePropsType) => {
    return (
        <div className={styles.bgTitle}>
            <span>{props.title}</span>
        </div>
    );
};

export default BgTitle;