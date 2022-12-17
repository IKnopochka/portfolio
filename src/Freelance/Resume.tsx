import React from 'react';
import styles from './Resume.module.scss'
import Title from "../Common/Components/Title";

const Resume = () => {
    return (
        <div className={styles.segment}>
            <div className={styles.block}>
                <Title mainTitle={'Resume'} subPronounWord={'my'} subMainWord={'Story'}/>
                <div></div>
            </div>
        </div>
    );
};

export default Resume;