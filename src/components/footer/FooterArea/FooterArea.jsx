import BamosLogo from '../../commons/BamosLogo/BamosLogo'
import styles from './FooterArea.module.css'

export default function FooterArea() {
    return(
        <footer>
            <div className={styles.footerlogo}>
                <BamosLogo />                
            </div>
        </footer>
    )
    
}