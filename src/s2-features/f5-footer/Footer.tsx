import React from 'react';
import styles from './Footer.module.scss'
import {Fade} from "react-awesome-reveal";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
library.add(fab, faLinkedinIn);

const Footer = () => {
    return (
        <div className={styles.segment}>
            <Fade>
            <div className={styles.block}>
                <div className={styles.item}>
                        <a href={''} className={styles.icon}>
                            <FontAwesomeIcon icon={["fab", "linkedin-in"]} className={styles.icon}/>
                        </a>
                </div>
                <div className={styles.item}>
                    <p>
                        <b>© 2022 </b>
                        all rights reserved
                    </p>
                </div>
                <div className={styles.item}>
                    <p>
                        developed by
                        <b> Iryna Nisnevich</b>
                    </p>
                </div>
            </div>
            </Fade>
        </div>

    );
};

export default Footer;