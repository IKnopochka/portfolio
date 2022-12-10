import React from 'react';
import ContactsInputArea from "./ContactsInputArea/ContactsInputArea";
import styles from './Contacts.module.scss'
import stylesContainer from "../Common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={styles.main}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <h2 className={stylesContainer.title}>Get in touch</h2>
                <div>
                    <ContactsInputArea/>
                </div>

            </div>
        </div>
    );
};

export default Contacts;