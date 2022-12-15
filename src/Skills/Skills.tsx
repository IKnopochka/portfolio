import React from 'react';
import styles from './Skills.module.scss'
import SkillBlock from "./Skill/SkillBlock";
import Title from "../Common/Components/Title";

const Skills = () => {
    return (
        <div className={styles.segment}>
            <div className={styles.block}>
                <Title mainTitle={'Professional Skills'} subPronounWord={'my'} subMainWord={'Talent'}/>
                <div className={styles.skills}>
                    <SkillBlock title={"JS"} description={'djdr hgsd fvsd fsf kj sdhf kshf kj hskhs dkfghkdjg hkjsdhfiu aoudhus s giuh sufhsidrf hsdhsgb'}/>
                    <SkillBlock title={'CSS'} description={'djhbgisfb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                </div>
            </div>

            </div>
    );
};

export default Skills;