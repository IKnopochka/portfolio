import React from 'react';
import styles from './ContactsInputArea.module.scss'
import {Fade} from "react-awesome-reveal";

const ContactsInputArea = () => {
    return (
        <div className={styles.inputContainer}>
            <Fade>
                <form action="/action_page.php">

                    <div className={styles.rowSm}>
                        <label>
                            Your full name
                            <b> *</b>
                            <span>
                            <input type="text" id="name" name="name"/>
                        </span>
                        </label>
                    </div>
                    <div className={styles.rowSm}>
                        <label>
                            Your email address
                            <b> *</b>
                            <span>
                            <input type="email" id="email" name="email"/>
                        </span>
                        </label>
                    </div>
                    <div className={styles.rowLg}>
                        <label>
                            Your subject
                            <b> *</b>
                            <span>
                            <input type="text" id="subject" name="subject"/>
                        </span>
                        </label>
                    </div>
                    <div className={styles.rowLg}>
                        <label>
                            Your Message
                            <b> *</b>
                            <span>
                            <textarea/>
                        </span>
                        </label>
                    </div>
                    <div>
                        <button type={'submit'}>
                            <span>Send message</span>
                        </button>
                    </div>

                </form>
            </Fade>
        </div>
    );
};

export default ContactsInputArea;