import styles from './HeaderArea.module.css'

export default function HeaderArea() {

// メニュー項目を配列で定義し、子コンポーネントに以下のpropsを渡す
 // text ⇨ 画面に表示する文字、href ⇨クリックした時のリンク先
    const menuItems = [
        {text:'z' , href: "/" },
        {text:'友人の紹介' , href: "/" },
        {text:'SNS' , href: "/" },
        {text:'webバナー' , href: "/" },
        {text:'動画配信サイト' , href: "/" },
        {text:'広告・ポスター' , href: "/" },
        {text:'その他' , href: "/" },
    ];

//NavigationコンポーネントにmenuItemsをpropsとして渡す
 // Nsvigation内ではitemsという名前で受け取れる

 // *****  自動import できていない<Navigation> *****
    return(
        <header>
            <h1>ヘッダー</h1>
            <Navigation items= {menuItems} />
        </header>
    );
}