import styles from '../FirstView.module.css';
import FirstView from '../../../assets/imges/karsten-winegeart-T-yAoikgido-unsplash.jpg'
import Logopink from '../../../assets/imges/bamosDesignLogo_accent.svg';

export default function FirstView() {
    return(
        <div>
            <img src={FirstView} alt="" className='FirstView'/>
            <img src={Logopink} alt="" className='logopink'/>
        </div>
    ); 
}