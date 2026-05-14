import { use, useState } from 'react';
import styles from './ThumbsUpButton.module.css';

export default function ThumbsUpButton() {

//props(init)でState(count)を初期化
    const[count , setCount] = useState({});

//[カウント]ボタンクリック時にカウント値をインクリメント
    const handleClick = () => setCount(count + 1);


    return(
        <button onClick={handleClick}></button>
    );

}

