import styles from './MainArea.module.css'

import HowHear from '../Form/HowHear/HowHear';

export default function MainArea() {

// メニュー項目を配列で定義し、子コンポーネントに以下のpropsを渡す
 // text ⇨ 画面に表示する文字、href ⇨クリックした時のリンク先
    const menuItems = [
        {text: 'z' , value: '' },
        {text: '友人の紹介', value: 'friend' },
        {text: 'SNS', value: 'SNS' },
        {text: 'webバナー', value: 'banner' },
        {text: '動画配信サイト', value: 'video' },
        {text: '広告・ポスター', value: 'add' },
        {text: 'その他', value: 'other' },    ];

//HowHearコンポーネントにmenuItemsをpropsとして渡す
 // HowHear内ではitemsという名前で受け取れる

    return(
        <main>
            <h1>メインエリア</h1>
            <HowHear items={menuItems} />            
        </main>
    );
}