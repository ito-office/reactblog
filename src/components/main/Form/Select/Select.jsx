import { useState } from "react";
import styles from './Select.module.css';

export default function Select() {
    const [form , setForm] = useState();

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // //[送信]ボタンをクリックで入力値をログ出力
    // const show = () => {
    //     console.log(``);
    // }


    return(
        <form>
            <label htmlFor=""></label>
            <select name="" id="" value={form}
                onChange={handleForm}>
                    <option value=""></option>
                    <option value=""></option>
            </select>
            {/* <button onClick={handleClick}
            className={`${isDone ? styles.button : styles.add} `}>
                送信
            </button> */}
        </form>
    );
    
}