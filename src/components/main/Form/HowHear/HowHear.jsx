import styles from './HowHear.module.css'

export default function HowHear({items = [] }) {
    return(
        <div className={styles.box}>
            <select name="how" id="how" className={styles.select}>
                <option value="select">Z</option>
                {items.map((item, index) => (
                    <option key={index} value={item.value}>
                            {item.text}
                    </option>
                ))}
            </select>
        </div>
    );
}