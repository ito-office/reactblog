import { Children, useState } from "react";
import styles from './SimpleButton.module.css';

export default function SimpleButton({children}) {
    const [isDone , setIsDone] = useState(false);

    const handleMouseOver = () => {
        setIsDone(true);
    }

    const handleMouseOut = () => {
        setIsDone(false);
    }

    return(
        <div className={styles.hoverbutton}>
            <button 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={isDone ? styles.add : styles.button}>
                {children}
            </button>
        </div>
    );
}