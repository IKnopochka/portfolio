import React from 'react';
import styles from './ProjectBlock.module.css';

type ProjectBlockPropsType = {
    title: string
    description: string
}

const ProjectBlock = (props: ProjectBlockPropsType) => {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer}>
                <a className={styles.imageLink}>Open</a>
            </div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
};

export default ProjectBlock;