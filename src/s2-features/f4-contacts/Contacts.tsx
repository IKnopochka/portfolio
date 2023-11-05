import React from 'react';
import styles from './Contacts.module.scss'
import Title from "../../s1-main/m1-ui/components/Title";
import ContactsBlock from "./ContactsBlock/ContactsBlock";
import BackgroundTitle from "../../s1-main/m1-ui/components/BackgroundTitle";
import {Fade} from "react-awesome-reveal";
import {SegmentPropsType} from "../../s1-main/m2-bll/store";

const Contacts = (props: {contacts: SegmentPropsType}) => {
    return (
        <div id={'contacts'} className={styles.segment}>
            <div className={styles.block}>
                <Fade>
                    <Title mainTitle={props.contacts.title.mainTitle} subPronounWord={props.contacts.title.subWord} subMainWord={props.contacts.title.subMainWord}/>
                    <ContactsBlock block={props.contacts.block}/>
                </Fade>
                    <BackgroundTitle title={props.contacts.backgroundTitle} side={'right'}/>

            </div>
        </div>
    );
};

export default Contacts;