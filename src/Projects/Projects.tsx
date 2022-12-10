import React from 'react';
import ProjectBlock from "./ProjectBlock/ProjectBlock";
import styles from './Projects.module.scss'
import stylesContainer from "../Common/styles/Container.module.css";

const Projects = () => {
    return (
        <div className={styles.main}>
            <div className={`${stylesContainer.container} ${styles.projectsMainBlock}`}>
                <h2 className={stylesContainer.title}>Projects</h2>
                <div className={styles.projects}>
                    <ProjectBlock title={'skfhsf'} description={'ksdjfnks sdsdf sdfsdfsf'}/>
                    <ProjectBlock title={'gszfrgfhhsf'} description={'efjwgefigwe wegr iugweiufg wieurgf igks sdsdf sdfsdfsf'}/>
                    <ProjectBlock title={'gszfrgfhhsf'} description={'efjwgefigwe wegr iugweiufg wieurgf igks sdsdf sdfsdfsf'}/>
                    <ProjectBlock title={'gszfrgfhhsf'} description={'efjwgefigwe wegr iugweiufg wieurgf igks sdsdf sdfsdfsf'}/>
                </div>
            </div>
        </div>

    );
};

export default Projects;