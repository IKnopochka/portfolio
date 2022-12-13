import React from 'react';
import ContactsInputArea from "./ContactsInputArea/ContactsInputArea";
import styles from './Contacts.module.scss'

const Contacts = () => {
    return (
        <div className={styles.main}>

            <h2 className={styles.mainTitle}>Get in touch</h2>
            <div>
                <ContactsInputArea/>
            </div>

        </div>
    );
};

export default Contacts;