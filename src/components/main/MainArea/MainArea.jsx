import styles from './MainArea.module.css'

import HowHear from '../Form/HowHear/HowHear';
import RadioButton from '../Form/RadioButton/RadioButton';
import CheckBox from '../Form/CheckBox/CheckBox';
import BamosLogo from '../../commons/BamosLogo/BamosLogo';
import PictureItem from '../card/PictureItem/PictureItem';
import ThumbsUpButton from '../card/CardContent/UpAndDownBox/ThumbsUpButton/ThumbsUpButton';
import ThumbsDownButton from '../card/CardContent/UpAndDownBox/ThumbsDownButton/ThumbsDownButton';
import bamosList from '../../../../bamosList';
import SectionHeader from '../SectionHeader/SectionHeader';
import SimpleButton from '../../commons/SimpleButton/SimpleButton';

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
            <SectionHeader />
            
            <ThumbsUpButton />
            <ThumbsDownButton />

            <ul className={styles.cardList}>
                {bamosList.map((item,id)=> (
                    <PictureItem
                    key={id}
                    image={item.image}
                    title={item.title}
                    />
            ))}
            </ul>

            <SectionHeader children = 'We Value Your Feedback'/>
            <p>{`We’re gathering feedback from our
                customers at BAMOS DESIGN. Please take 
                a moment to share your thoughts — your 
                input helps us make BAMOS DESIGN even 
                better.`}</p>

            <SimpleButton  children = 'Feedback'/>
            
        </main>
    );
}