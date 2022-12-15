import React from 'react';
import styles from './Contacts.module.scss'
import Title from "../Common/Components/Title";
import ContactsBlock from "./ContactsBlock/ContactsBlock";

const Contacts = () => {
    return (
        <div className={styles.segment}>
            <div className={styles.block}>
                <Title mainTitle={'Contact me'} subPronounWord={'Let\'s'} subMainWord={'Talk About Ideas'}/>
                <div>
                    <ContactsBlock/>
                </div>
            </div>
        </div>
    );
};

export default Contacts;