import React from 'react';
import ProjectBlock from "./ProjectBlock/ProjectBlock";
import styles from './Portfolio.module.scss'
import Title from "../../s1-main/m1-ui/components/Title";
import BackgroundTitle from "../../s1-main/m1-ui/components/BackgroundTitle";
import {Fade} from "react-awesome-reveal";

const Portfolio = () => {
    return (
        <div className={styles.segment}>
            <div className={styles.block}>
                <Fade>
                    <Title mainTitle={'Portfolio'} subPronounWord={'my'} subMainWord={'Cases'}/>
                    <div className={styles.projects}>
                        <ProjectBlock title={'Zorro'} description={'ksdjfnks sdsdf sdfsdfsf'}/>
                        <ProjectBlock title={'Gooff'}
                                      description={'efjwgefigwe wegr iugweiufg wieurgf igks sdsdf sdfsdfsf'}/>
                        <ProjectBlock title={'Rati'}
                                      description={'efjwgefigwe wegr iugweiufg wieurgf igks sdsdf sdfsdfsf'}/>
                    </div>
                </Fade>
                    <BackgroundTitle title={'Portfolio'} side={'left'}/>

            </div>

        </div>

    );
};

export default Portfolio;