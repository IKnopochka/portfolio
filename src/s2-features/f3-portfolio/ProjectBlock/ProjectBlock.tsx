import React from 'react';
import styles from './ProjectBlock.module.scss';
import {Fade} from "react-awesome-reveal";

type ProjectBlockPropsType = {
    title: string
    description: string
}

const ProjectBlock = (props: ProjectBlockPropsType) => {
    return (

        <div className={styles.project}>
            <Fade>
                <div className={styles.image}>
                    <a>
                        <img src={"https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"}/>
                        <span className={styles.overlay}></span>
                    </a>
                </div>
                <div className={styles.description}>
                    <div className={styles.category}>development</div>
                    <h3 className={styles.name}>{props.title}</h3>
                    <p className={styles.text}>{props.description}</p>
                </div>
            </Fade>
        </div>

    );
};

export default ProjectBlock;