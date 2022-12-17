import React from 'react';
import ProjectBlock from "./ProjectBlock/ProjectBlock";
import styles from './Portfolio.module.scss'
import Title from "../Common/Components/Title";
import VLineBlock from "../Common/Components/VLineBlock";
import BgTitle from "../Common/Components/BgTitle";

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
                <BgTitle title={'Portfolio'}/>
                <VLineBlock/>

            </div>

        </div>

    );
};

export default Portfolio;