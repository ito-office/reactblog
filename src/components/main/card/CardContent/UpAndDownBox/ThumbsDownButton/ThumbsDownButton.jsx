import { useState } from "react";
import styles from './ThumbsDownButton.module.css';
import thumbdown from '../../../../../../assets/imges/thumb_down.svg';
import thumbdowncolor from '../../../../../../assets/imges/thumb_down_color.svg';


export default function ThumbsDownButton({props = 3}) {

//propsでStateを初期化
    const[count , setCount] = useState(props);
    const[like , setLike] = useState(false);

//[カウント]ボタンクリック時にカウント値をインクリメント
//[but]ボタンをクリック時に色がつく   

    const handleClick = () => {
        setLike(!like);
        setCount(like ? count -1 : count + 1);
    }


    return(
        <div className={styles.butcount}>
            <button onClick={handleClick}>   
            <img 
            src = {like ? thumbdowncolor : thumbdown} 
            alt = "butのボタン" 
            />
            </button>
            <span>{count}</span>
        </div>
    );

}