import React from 'react';
import styles from './ProjectBlock.module.scss';
import {Fade} from "react-awesome-reveal";
import {BlockPropsType} from "../../../s1-main/m2-bll/store";

const ProjectBlock = (props: BlockPropsType) => {
    return (

        <div className={styles.project}>
            <Fade>
                <div className={styles.image}>
                    <a href={props.link}>
                        <img src={props.img}/>
                        <span className={styles.overlay}></span>
                    </a>
                </div>
                <div className={styles.description}>
                    <div className={styles.category}>{props.value}</div>
                    <h3 className={styles.name}>{props.title}</h3>
                    <p className={styles.text}>{props.description}</p>
                </div>
            </Fade>
        </div>

    );
};

export default ProjectBlock;