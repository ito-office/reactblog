import { Children } from "react";
import styles from './SectionHeader.module.css';

export default function SectionHeader({children = 'Latest Blog Posts'}) {
    return(
        <div className={styles.box}>
            <h2 className={styles.heading}>
                {children}
            </h2>
        </div>
    );
}