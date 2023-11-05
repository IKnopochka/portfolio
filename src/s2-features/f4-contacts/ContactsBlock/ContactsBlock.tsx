import React from 'react';
import styles from './ContactsBlock.module.scss'
import ContactsInfo from "./ContactsInfo/ContactsInfo";
import ContactsInputArea from "./ContactsInputArea/ContactsInputArea";
import {BlockPropsType} from "../../../s1-main/m2-bll/store";

const ContactsBlock = (props: {block: BlockPropsType[] }) => {
    return (
        <div className={styles.block}>
                <ContactsInfo block={props.block}/>
                <ContactsInputArea/>
        </div>
    );
};

export default ContactsBlock;