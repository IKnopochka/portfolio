import React from 'react';
import styles from './Skills.module.scss'
import SkillBlock from "./Skill/SkillBlock";
import Title from "../Common/components/Title";
import BackgroundTitle from "../Common/components/BackgroundTitle";

const Skills = () => {
    return (
        <div className={styles.segment}>
            <div className={styles.block}>
                <Title mainTitle={'Professional Skills'} subPronounWord={'my'} subMainWord={'Talent'}/>
                <div className={styles.skills}>
                    <SkillBlock title={"JS"}
                                description={'djdr hgsd fvsd fsf kj sdhf kshf kj hskhs dkfghkdjg hkjsdhfiu aoudhus s giuh sufhsidrf hsdhsgb'}/>
                    <SkillBlock title={'CSS'} description={'djhbgisfb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                    <SkillBlock title={'React'} description={'djhbwsdfgsf aefdhdgdfsdffb'}/>
                </div>
                <BackgroundTitle title={'Skills'} side={'right'}/>
            </div>
        </div>
    );
};

export default Skills;