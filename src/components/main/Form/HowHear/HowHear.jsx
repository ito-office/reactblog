import styles from './HowHear.module.css'

export default function HowHear({items = [] , children}) {
    return(
         <>
            {children}
            <div className={styles.box}>
                <select name="how" id="how" className={styles.select}>
                    <option value="select">--１つ選択してください--</option>
                    {items.map((item, id) => (
                        <option key={id} value={item.value}>
                                {item.text}
                        </option>
                    ))}
            </select>
        </div>
        </>
    );
}