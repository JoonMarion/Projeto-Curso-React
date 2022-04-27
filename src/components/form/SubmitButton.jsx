import React from 'react';
import styles from './SubmitButton.module.css';

function SubmitButton({ text }) {
    return (
        <div className={styles.alinharBtn}>
            <button className={styles.btn}>{text}</button>
        </div>
    );
}

export default SubmitButton;
