import React from 'react';
import styles from './Skills.module.scss'
import SkillBlock from "./Skill/SkillBlock";

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
                <h2 className={styles.mainTitle}>Skills</h2>
                <div className={styles.skills}>
                    <SkillBlock title={"JS"} description={'djdrhgsdfvsdfsfkj sdhfkshf kjhskhs dkfghkdjg hkjsdhfiu aoudhus sgiuh sufhsidrf hsdhsgb'}/>
                    <SkillBlock title={'CSS'} description={'djhbgisfb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                </div>
            </div>
    );
};

export default Skills;