import React from 'react';
import styles from './ContactInfoItem.module.scss';

type ContactInfoPropsType = {
    icon?: any
    title: string
    text: string
}

const ContactInfoItem = (props: ContactInfoPropsType) => {
    return (
        <div className={styles.infoItem}>
            <div className={styles.icon}>
                <div className={styles.iconItem}/>
            </div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.text}>{props.text}</div>
        </div>
    );
};

export default ContactInfoItem;