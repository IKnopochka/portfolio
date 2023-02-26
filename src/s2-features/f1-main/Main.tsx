import React from 'react';
import styles from './Main.module.scss'
import BackgroundTitle from "../../s1-main/m1-ui/components/BackgroundTitle";
import {Fade} from "react-awesome-reveal";
// import photo from '../../s1-main/m1-ui/images/MainPhoto copy.png'
import photo from '../../s1-main/m1-ui/images/mainPhotoSelfie copy.png'

const Main = () => {
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
                                <b>Iryna </b>
                                <span>Nisnevich</span>
                            </h1>
                            <div className={styles.subTitle}>
                            <span>I am
                            <strong> Front-End Developer</strong>
                            </span>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <p>From Minsk, Belarus. I'm very passionate and dedicated to my work.</p>
                        </div>
                    </div>
                    <div className={styles.photoBlock}>
                        <span className={styles.circle}></span>
                        <img src={photo}/>
                    </div>
                </Fade>
                    <BackgroundTitle title={'Developer'} side={'left'}/>

            </div>


        </div>


    );
};

export default Main;