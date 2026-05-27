import styles from './BamosLogo.module.css';

export default function BamosLogo(props) {
    return(
        <div>
            <img 
            src={props.image}
            alt={props.title}
            className={styles.logo} />
        </div>
    );
}