import React from 'react';
import ProjectBlock from "./ProjectBlock/ProjectBlock";
import styles from './Portfolio.module.scss'
import Title from "../Common/components/Title";
import BackgroundTitle from "../Common/components/BackgroundTitle";

const Portfolio = () => {
    return (
        <div className={styles.segment}>
            <div className={styles.block}>

                <Title mainTitle={'Portfolio'} subPronounWord={'my'} subMainWord={'Cases'}/>
                <div className={styles.projects}>
                    <ProjectBlock title={'Zorro'} description={'ksdjfnks sdsdf sdfsdfsf'}/>
                    <ProjectBlock title={'Gooff'}
                                  description={'efjwgefigwe wegr iugweiufg wieurgf igks sdsdf sdfsdfsf'}/>
                    <ProjectBlock title={'Rati'}
                                  description={'efjwgefigwe wegr iugweiufg wieurgf igks sdsdf sdfsdfsf'}/>
                </div>
                <BackgroundTitle title={'Portfolio'} side={'left'}/>

            </div>

        </div>

    );
};

export default Portfolio;