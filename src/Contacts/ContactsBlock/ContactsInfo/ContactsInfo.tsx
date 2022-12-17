import React from 'react';
import ContactInfoItem from "./ContactInfoItem/ContactInfoItem";
import styles from './ContactsInfo.module.scss';

const ContactsInfo = () => {
    return (
        <div className={styles.infoContainer}>
            <ContactInfoItem title={"Address"} text={"sdjj jsj sjsj d"}/>
            <ContactInfoItem title={"Address"} text={"sdjj jsj sjsj d"}/>
            <ContactInfoItem title={"Address"} text={"sdjjxc c  xcjsjxxccxccvxcv sjsj d"}/>
            <ContactInfoItem title={"Address"} text={"sdjxcvhj jksdfk j j jsj sjsj d"}/>
        </div>
    );
};

export default ContactsInfo;