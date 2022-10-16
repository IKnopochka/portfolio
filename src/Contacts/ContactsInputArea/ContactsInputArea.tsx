import React from 'react';
import styles from './ContactsInputArea.module.css'

const ContactsInputArea = () => {
    return (
        <div className={styles.inputContainer}>
            <form action="/action_page.php">
                <input type="text" id="name" name="name"/>
                <input type="email" id="email" name="email"/>
                <textarea></textarea>
            </form>
        </div>
    );
};

export default ContactsInputArea;