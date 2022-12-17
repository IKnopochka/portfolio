import React from 'react';
import styles from './ContactsBlock.module.scss'
import ContactsInfo from "./ContactsInfo/ContactsInfo";
import ContactsInputArea from "./ContactsInputArea/ContactsInputArea";

const ContactsBlock = () => {
    return (
        <div className={styles.block}>
                <ContactsInfo/>
                <ContactsInputArea/>
        </div>
    );
};

export default ContactsBlock;