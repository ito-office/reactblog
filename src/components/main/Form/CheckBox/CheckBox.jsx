import { useState } from "react";
import styles from './CheckBox.module.css'

export default function CheckBox() {
    const [form , setForm] = useState({
        check: true
    });
    
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    };

    // //[送信]ボタンをクリックで入力値をログ出力
    // const show = () => {
    //     console.log(``);
    // }

    return(
        <form className={styles.checkbox}>
            <label htmlFor="check"></label>
            <input type="checkbox" name="" id="" 
            // checked={}
            // onChange={handleForm}
            /><br/>

            <label htmlFor="check"></label>
            <input type="checkbox" name="" id="" 
            // checked={}
            // onChange={handleForm}
            /><br/>

            <label htmlFor="check"></label>
            <input type="checkbox" name="" id="" 
            // checked={}
            // onChange={handleForm}
            /><br/>
            
            <label htmlFor="check"></label>
            <input type="checkbox" name="" id="" 
            // checked={}
            // onChange={handleForm}
            /><br/>

            {/* <button onClick={handleClick}
            className={`${isDone ? styles.button : styles.add} `}>
                送信
            </button> */}
        </form>
    )
}