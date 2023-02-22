import React from 'react';
import styles from './Contacts.module.scss'
import Title from "../../s1-main/m1-ui/components/Title";
import ContactsBlock from "./ContactsBlock/ContactsBlock";
import BackgroundTitle from "../../s1-main/m1-ui/components/BackgroundTitle";
import {Fade} from "react-awesome-reveal";

const Contacts = () => {
    return (
        <div id={'contacts'} className={styles.segment}>
            <div className={styles.block}>
                <Fade>
                    <Title mainTitle={'Contact me'} subPronounWord={'Let\'s'} subMainWord={'Talk About Ideas'}/>
                    <ContactsBlock/>
                </Fade>
                    <BackgroundTitle title={'Contact me'} side={'right'}/>

            </div>
        </div>
    );
};

export default Contacts;