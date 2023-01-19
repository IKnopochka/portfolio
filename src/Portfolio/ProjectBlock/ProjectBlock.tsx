import React from 'react';
import styles from './ProjectBlock.module.scss';

type ProjectBlockPropsType = {
    title: string
    description: string
}

const ProjectBlock = (props: ProjectBlockPropsType) => {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer}>
                <a className={styles.imageLink}></a>
            </div>
            <div className={styles.description}>
                <div className={styles.category}>development</div>
                <h3 className={styles.name}>{props.title}</h3>
                <p className={styles.text}>{props.description}</p>
            </div>

        </div>
    );
};

export default ProjectBlock;