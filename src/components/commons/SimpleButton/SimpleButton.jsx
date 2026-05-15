import { useState } from "react";
import styles from './SimpleButton.module.css';

export default function SimpleButton() {
    const [isDone , setIsDone] = useState(false);

    const handleMouseOver = () => {
        setIsDone(true);
    }

    const handleMouseOut = () => {
        setIsDone(false);
    }

    return(
        <div>
            <button 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={isDone ? styles.button : styles.add}>
                送信
            </button>
        </div>
    );
}