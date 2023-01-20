import React from 'react';
import ContactInfoItem from "./ContactInfoItem/ContactInfoItem";
import styles from './ContactsInfo.module.scss';


const ContactsInfo = () => {
    const iconStore = [
        ["far", "user"],
        ["far", "address-book"],
        ["far", "envelope"],
        ["far", "map"]
    ]
    const store = [
        {title: "Address", text: "Minsk, Belarus", icon: ["fas", "user"]},
        {title: "Freelance", text: "Available Right Now", icon: ["far", "address-book"]},
        {title: "Email", text: "irynanisnevich@gmail.com", icon: ["far", "envelope"]},
        {title: "Phone", text: "+375 33 344 - 46 - 26", icon: ["far", "map"]}
    ]

    return (
        <div className={styles.infoContainer}>
            <ContactInfoItem title={"Address"} text={"Minsk, Belarus"} icon={iconStore[0]}/>
            <ContactInfoItem title={"Freelance"} text={"Available Right Now"} icon={iconStore[1]}/>
            <ContactInfoItem title={"Email"} text={"irynanisnevich@gmail.com"} icon={iconStore[2]}/>
            <ContactInfoItem title={"Phone"} text={"+375 33 344 - 46 - 26"} icon={iconStore[3]}/>
        </div>
    );
};

export default ContactsInfo;