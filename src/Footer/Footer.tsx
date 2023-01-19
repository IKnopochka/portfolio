import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.segment}>
            <div className={styles.block}>
                <div className={`${styles.socialLinks} ${styles.item}`}>
                    <div className={styles.icon}>
                            <div className={styles.iconItem}>
                                {/*<a href={''}>f</a>*/}
                            </div>
                    </div>
                </div>
                <div className={`${styles.copyright} ${styles.item}`}>
                    <p>
                        <b>© 2022 </b>
                        all rights reserved
                    </p>
                </div>
                <div className={`${styles.developer} ${styles.item}`}>
                    <p>
                        developed by
                        <b> Iryna Nisnevich</b>
                    </p>
                </div>
            </div>

        </div>

    );
};

export default Footer;