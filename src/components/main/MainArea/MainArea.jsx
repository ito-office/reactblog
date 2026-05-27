import styles from './MainArea.module.css'

import HowHear from '../Form/HowHear/HowHear';
import RadioButton from '../Form/RadioButton/RadioButton';
import CheckBox from '../Form/CheckBox/CheckBox';
import BamosLogo from '../../commons/BamosLogo/BamosLogo';
import PictureItem from '../card/PictureItem/PictureItem';
import ThumbsUpButton from '../card/CardContent/UpAndDownBox/ThumbsUpButton/ThumbsUpButton';
import ThumbsDownButton from '../card/CardContent/UpAndDownBox/ThumbsDownButton/ThumbsDownButton';
import bamosList from '../../../../bamosList';

export default function MainArea() {

// メニュー項目を配列で定義し、子コンポーネントに以下のpropsを渡す
 // text ⇨ 画面に表示する文字、href ⇨クリックした時のリンク先
    const menuItems = [
        {text: '友人の紹介', value: 'friend' },
        {text: 'SNS', value: 'SNS' },
        {text: 'webバナー', value: 'banner' },
        {text: '動画配信サイト', value: 'video' },
        {text: '広告・ポスター', value: 'add' },
        {text: 'その他', value: 'other' }, ];

//HowHearコンポーネントにmenuItemsをpropsとして渡す
 // HowHear内ではitemsという名前で受け取れる

    return(
        <main>
            {/* <h1>メインエリア</h1> */}
            {/* <HowHear items={menuItems} /> */}
            {/* <ThumbsUpButton  props={123}/> */}
            <ThumbsUpButton />
            {/* <ThumbsDownButton props={9}/> */}
            <ThumbsDownButton />
            <BamosLogo />

            <ul>
                {bamosList.map((item,id)=> (
                    <PictureItem
                    key={id}
                    image={item.image}
                    title={item.title}
                    />
            ))}
            </ul>
        </main>
    );
}