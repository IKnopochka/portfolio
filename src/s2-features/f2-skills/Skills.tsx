import React from 'react';
import styles from './Skills.module.scss'
import SkillBlock from "./Skill/SkillBlock";
import Title from "../../s1-main/m1-ui/components/Title";
import BackgroundTitle from "../../s1-main/m1-ui/components/BackgroundTitle";
import {Fade} from "react-awesome-reveal";
import {SegmentPropsType} from "../../s1-main/m2-bll/store";

const Skills = (props: { skills: SegmentPropsType }) => {
    return (
        <div id={'skills'} className={styles.segment}>
            <div className={styles.block}>
                <Fade>
                    <Title mainTitle={props.skills.title.mainTitle}
                           subPronounWord={props.skills.title.subWord}
                           subMainWord={props.skills.title.subMainWord}/>
                    <div className={styles.skills}>
                        {props.skills.block.map(b => <SkillBlock title={b.title} description={b.description}
                                                                 value={b.value}/>)}
                    </div>
                </Fade>
                <BackgroundTitle title={props.skills.backgroundTitle} side={'right'}/>

            </div>
        </div>
    );
};

export default Skills;