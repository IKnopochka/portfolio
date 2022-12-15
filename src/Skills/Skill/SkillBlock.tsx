import React from 'react';
import styles from './SkillBlock.module.scss'

type SkillPropsType = {
    title: string
    description: string
}

const SkillBlock = (props: SkillPropsType) => {
    return (
        <div className={styles.skill}>
            <h3 className={styles.name}>{props.title}</h3>
            <span className={styles.text}>{props.description}</span>
            <div className={styles.dots}>
                <div className={styles.dot}>
                    <span/>
                </div>

            </div>
            <div className={styles.value}>
                <span className={styles.num}>85
                    <span>%</span>
                </span>
            </div>
        </div>
    );
};

export default SkillBlock;