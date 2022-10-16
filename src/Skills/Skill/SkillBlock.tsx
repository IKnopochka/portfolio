import React from 'react';
import styles from './SkillBlock.module.css'

type SkillPropsType = {
    title: string
    description: string
}

const SkillBlock = (props: SkillPropsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
};

export default SkillBlock;