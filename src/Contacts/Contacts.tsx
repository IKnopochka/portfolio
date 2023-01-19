import React from 'react';
import styles from './Contacts.module.scss'
import Title from "../Common/components/Title";
import ContactsBlock from "./ContactsBlock/ContactsBlock";
import BackgroundTitle from "../Common/components/BackgroundTitle";

const Contacts = () => {
    return (
        <div className={styles.segment}>
            <div className={styles.block}>
                <Title mainTitle={'Contact me'} subPronounWord={'Let\'s'} subMainWord={'Talk About Ideas'}/>
                <div>
                    <ContactsBlock/>
                </div>
                <BackgroundTitle title={'Contact me'} side={'right'}/>
            </div>
        </div>
    );
};

export default Contacts;