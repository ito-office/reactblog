import { useState } from "react";
import styles from './SimpleButton.module.css';

export default function SimpleButton() {
    const [isDone , setIsDone] = useState(false);

    const handleClick = () => {
        setIsDone(true);
    }

    return(
        <>
            <button onClick={handleClick}
            className={`${isDone ? styles.button : styles.add} `}>
                送信
            </button>
        </>
    );
    
}