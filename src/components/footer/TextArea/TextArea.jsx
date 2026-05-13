import { useState } from "react";

export default function TextArea() {
    const [form , setForm] = useState({
        comment:'ここに記入してください。'

    })

//テキストエリアの変更時に入力値をStateに反映
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value        
        });
    };

    return(
        <form>
            <label htmlFor="comment"></label>
            <textarea name="comment" id="comment"
            cols="30" rows="7"
            value={form.text}
            onChange={handleForm}></textarea>
        </form>
    );
}