import styles from './FirstView.module.css';
import firstViewImage from '../../../assets/imges/karsten-winegeart-T-yAoikgido-unsplash.jpg'
import Logopink from '../../../assets/imges/bamosDesignLogo_accent.svg';

export default function FirstView() {
    return(
        <div className={styles.firstViewWrapper}>
            <img src={Logopink} alt="ピンクのロゴ画像" className={styles.logopink}/>
        </div>
    ); 
}