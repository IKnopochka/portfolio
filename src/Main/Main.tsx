import React from 'react';
import styles from './Main.module.scss'
import BackgroundTitle from "../Common/components/BackgroundTitle";

const Main = () => {
    return (
        <div className={styles.segment}>
            <div className={styles.block}>
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
                <div className={styles.photo}></div>
                <BackgroundTitle title={'Developer'} side={'left'}/>
            </div>


        </div>


    );
};

export default Main;