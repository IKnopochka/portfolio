import React from 'react';
import ProjectBlock from "./ProjectBlock/ProjectBlock";
import styles from './Projects.module.scss'

const Projects = () => {
    return (
        <div className={styles.main}>
                <h2 className={styles.mainTitle}>Projects</h2>
                <div className={styles.projects}>
                    <ProjectBlock title={'skfhsf'} description={'ksdjfnks sdsdf sdfsdfsf'}/>
                    <ProjectBlock title={'gszfrgfhhsf'} description={'efjwgefigwe wegr iugweiufg wieurgf igks sdsdf sdfsdfsf'}/>
                    <ProjectBlock title={'gszfrgfhhsf'} description={'efjwgefigwe wegr iugweiufg wieurgf igks sdsdf sdfsdfsf'}/>
                    <ProjectBlock title={'gszfrgfhhsf'} description={'efjwgefigwe wegr iugweiufg wieurgf igks sdsdf sdfsdfsf'}/>
                </div>
        </div>

    );
};

export default Projects;