import { useState } from "react";

export default function RadioButton() {
    const [form , setForm] = useState({});
    
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


    //Stateの現在値に応じて,checked属性の値を決定
    return(
        <form>
            <label htmlFor=""></label>
            <input type="radio" name="text" id=""
            value="text" 
            // checked={}
            // onChange={handleForm}
            /><br/>

            <label htmlFor=""></label>
            <input type="radio" name="text" id=""
            value="text" 
            // checked={}
            // onChange={handleForm}
            /><br/>

            <label htmlFor=""></label>
            <input type="radio" name="text" id=""
            value="text" 
            // checked={}
            // onChange={handleForm}
            /><br/>

            <label htmlFor=""></label>
            <input type="radio" name="text" id=""
            value="text" 
            // checked={}
            // onChange={handleForm}
            /><br/>


            {/* <button onClick={handleClick}
            className={`${isDone ? styles.button : styles.add} `}>
                送信
            </button> */}
        </form>
    );
}