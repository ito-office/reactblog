import styles from './PictureItem.module.css';
import bamosList from '../../../../../bamosList.js';

export default function PictureItem ({image , title}) {

    return(
        <div className={styles.card}>
            <li>
                <img 
                    src={image}
                    alt={title} 
                    className={styles.thumbnail}
                />
            </li>
        </div>
    );
}