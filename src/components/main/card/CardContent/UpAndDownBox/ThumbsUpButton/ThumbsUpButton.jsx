import { useState } from 'react';
import styles from './ThumbsUpButton.module.css';
import thumbup from '../../../../../../assets/imges/thumb_up.svg';
import thumbupcolor from '../../../../../../assets/imges/thumb_up_color.svg';

export default function ThumbsUpButton({props = 0}) {

//propsでStateを初期化
    const[count , setCount] = useState(props);
    const[like , setLike] = useState(false);

//[カウント]ボタンクリック時にカウント値をインクリメント
//[いいね]ボタンをクリック時に色がつく   

    const handleClick = () => {
        setLike(!like);
        setCount(like ? count -1 : count + 1);
    }


    return(
        <div className={styles.upcount}>
            <button onClick={handleClick}>   
            <img 
            src = {like ? thumbupcolor : thumbup} 
            alt = "いいねのボタン" 
            className=''
            />
            </button>
            <span>{count}</span>
        </div>
    );

}

