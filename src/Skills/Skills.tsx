import React from 'react';
import styles from './Skills.module.css'
import stylesContainer from './../Common/styles/Container.module.css'
import SkillBlock from "./Skill/SkillBlock";

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={stylesContainer.title}>Skills</h2>
                <div className={styles.skills}>
                    <SkillBlock title={"JS"} description={'djdrhgsdfvsdfsfkj sdhfkshf kjhskhs dkfghkdjg hkjsdhfiu aoudhus sgiuh sufhsidrf hsdhsgb'}/>
                    <SkillBlock title={'CSS'} description={'djhbgisfb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;