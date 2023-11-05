import React from 'react';
import ProjectBlock from "./ProjectBlock/ProjectBlock";
import styles from './Portfolio.module.scss'
import Title from "../../s1-main/m1-ui/components/Title";
import BackgroundTitle from "../../s1-main/m1-ui/components/BackgroundTitle";
import {Fade} from "react-awesome-reveal";
import {SegmentPropsType} from "../../s1-main/m2-bll/store";

const Portfolio = (props: {portfolio: SegmentPropsType}) => {
    return (
        <div id={'portfolio'} className={styles.segment}>
            <div className={styles.block}>
                <Fade>
                    <Title mainTitle={props.portfolio.title.mainTitle} subPronounWord={props.portfolio.title.subWord} subMainWord={props.portfolio.title.subMainWord}/>
                    <div className={styles.projects}>
                        {props.portfolio.block.map(b => <ProjectBlock title={b.title} description={b.description}
                                                                 value={b.value} img={b.img} link={b.link}/>)}
                    </div>
                </Fade>
                    <BackgroundTitle title={props.portfolio.backgroundTitle} side={'left'}/>

            </div>

        </div>

    );
};

export default Portfolio;