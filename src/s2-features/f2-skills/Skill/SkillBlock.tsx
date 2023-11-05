import React from 'react';
import styles from './SkillBlock.module.scss'
import {Fade} from "react-awesome-reveal";
import {BlockPropsType} from "../../../s1-main/m2-bll/store";

const SkillBlock = (props: BlockPropsType) => {
    return (
        <div className={styles.skill}>
            <Fade>
                <h3 className={styles.name}>{props.title}</h3>
                <span className={styles.text}>{props.description}</span>
                <div className={styles.dots}>
                    <div className={styles.dot} style={{width: `${props.value}%`}}>
                        <span/>
                    </div>

                </div>
                <div className={styles.value}>
                    <span className={styles.num}>{props.value}
                        <span>%</span>
                    </span>
                </div>
            </Fade>
        </div>
    );
};

export default SkillBlock;