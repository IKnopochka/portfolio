import React from 'react';
import styles from './ContactsInputArea.module.scss'

const ContactsInputArea = () => {
    return (
        <div className={styles.inputContainer}>
            <form action="/action_page.php">
                <div className={styles.rowSm}>
                    <label>
                        Your full name
                        <b> *</b>
                        <span className={styles.shorterInput}>
                            <input type="text" id="name" name="name" className={styles.field}/>
                        </span>
                    </label>
                </div>
                <div className={styles.rowSm}>
                    <label>
                        Your email address
                        <b> *</b>
                        <span className={styles.shorterInput}>
                            <input type="email" id="email" name="email" className={styles.field}/>
                        </span>
                    </label>
                </div>
                <div className={styles.rowLg}>
                    <label>
                        Your subject
                        <b> *</b>
                        <span>
                            <input type="text" id="subject" name="subject" className={styles.field}/>
                        </span>
                    </label>
                </div>
                <div className={styles.rowLg}>
                    <label>
                        Your Message
                        <b> *</b>
                        <span>
                            <textarea className={`${styles.field} ${styles.textarea}`}/>
                        </span>
                    </label>
                </div>
                <div>
                    <button type={'submit'}>
                        <span>Send message</span>
                    </button>
                </div>

            </form>
        </div>
    );
};

export default ContactsInputArea;