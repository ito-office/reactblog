import styles from './BamosLogo.module.css';
import logo_accent from '../../../assets/imges/bamosDesignLogo_accent.svg';
import logo_black from '../../../assets/imges/bamosDesignLogo_black.svg';
import logo_white from '../../../assets/imges/bamosDesignLogo_white.svg';


export default function BamosLogo() {
    return(
        <div>
            <img 
                src={logo_accent} 
                alt="ロゴマーク" />
        </div>
    );    
}