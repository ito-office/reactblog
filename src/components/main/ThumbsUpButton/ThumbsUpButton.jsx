import { use, useState } from 'react';
import styles from './ThumbsUpButton.module.css';

export default function ThumbsUpButton() {

//propsでStateを初期化
    const[count , setCount] = useState({});
    const[like , setLike] = useState(false);

//[カウント]ボタンクリック時にカウント値をインクリメント
//[いいね]ボタンをクリック時に色がつく
    const handleClick = () => setCount(count + 1);
    const liked = () => setLike(

    // className={isDone ? styles.button : styles.add}>
    );

//     return(
//         <button onClick={handleClick}
//         // {like ?  }></button>
//     );

}

