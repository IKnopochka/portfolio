import React from 'react';
import styles from './SkillsBlock.module.css'
import stylesContainer from './../Common/styles/Container.module.css'
import Skill from "./Skill/Skill";

const SkillsBlock = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={"JS"} description={'djdrhgsdfvsdfsfkj sdhfkshf kjhskhs dkfghkdjg hkjsdhfiu aoudhus sgiuh sufhsidrf hsdhsgb'}/>
                    <Skill title={'CSS'} description={'djhbgisfb'}/>
                    <Skill title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                </div>
            </div>
        </div>
    );
};

export default SkillsBlock;