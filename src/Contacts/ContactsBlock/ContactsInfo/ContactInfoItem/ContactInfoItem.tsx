import React from 'react';
import styles from './ContactInfoItem.module.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {far, faMap, faAddressBook, faEnvelope, faUser} from "@fortawesome/free-regular-svg-icons";
library.add(far, faMap, faAddressBook, faEnvelope, faUser);

type ContactInfoPropsType = {
    icon?: any
    title: string
    text: string
}

const ContactInfoItem = (props: ContactInfoPropsType) => {
    return (

        <div className={styles.infoItem}>
            <div className={styles.iconCircle}>
                {/*<FontAwesomeIcon icon={["fas", "user"]} className={styles.icon}/>
                <FontAwesomeIcon icon={["far", "address-book"]} className={styles.icon}/>
                <FontAwesomeIcon icon={["far", "envelope"]} className={styles.icon}/>
                <FontAwesomeIcon icon={["far", "map"]} className={styles.icon}/>*/}
                <FontAwesomeIcon icon={props.icon} className={styles.icon}/>
            </div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.text}>{props.text}</div>
        </div>
    );
};

export default ContactInfoItem;