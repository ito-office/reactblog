import styles from './PictureItem.module.css';
import bamosList from '../../../../../bamosList.js';

export default function PictureItem (image , title) {

    return(
        <li>
            <img 
            src={image}
            alt={title} 
            />
        </li>
    );
}