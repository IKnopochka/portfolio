import React from 'react';
import styles from './Main.module.scss'
import BackgroundTitle from "../../s1-main/m1-ui/components/BackgroundTitle";
import {Fade} from "react-awesome-reveal";
import {MainPropsType} from "../../s1-main/m2-bll/store";

const Main = (props: { main: MainPropsType }) => {
    return (
        <div id={'main'} className={styles.segment}>
            <div className={styles.block}>
                <Fade>
                    <div className={styles.aboutMeBlock}>
                        <div className={styles.title}>
                            <div className={styles.subTitle}>
                            <span>Hello,
                                <b> my name is</b>
                            </span>
                            </div>
                            <h1 className={styles.mainTitle}>
                                <b>{props.main.name}</b>
                                <span>{props.main.surname}</span>
                            </h1>
                            <div className={styles.subTitle}>
                            <span>I am
                            <strong>{props.main.profession}</strong>
                            </span>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <p>{props.main.aboutMe}</p>
                        </div>
                    </div>
                    <div className={styles.photoBlock}>
                        <span className={styles.circle}></span>
                        <img src={props.main.photo}/>
                    </div>
                </Fade>
                    <BackgroundTitle title={props.main.backgroundTitle} side={'left'}/>

            </div>


        </div>


    );
};

export default Main;