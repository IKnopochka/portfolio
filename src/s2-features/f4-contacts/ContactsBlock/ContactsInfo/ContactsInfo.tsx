import React from 'react';
import ContactInfoItem from "./ContactInfoItem/ContactInfoItem";
import styles from './ContactsInfo.module.scss';
import {Fade} from "react-awesome-reveal";
import {BlockPropsType} from "../../../../s1-main/m2-bll/store";

const ContactsInfo = (props: {block: BlockPropsType[] }) => {
    return (
        <div className={styles.infoContainer}>
            <Fade>
                {props.block.map(b => <ContactInfoItem title={b.title} text={b.description}
                                                         icon={b.value}/>)}
            </Fade>
        </div>
    );
};

export default ContactsInfo;