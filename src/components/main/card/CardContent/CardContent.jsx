import styles from './CardContent.module.css';
import CardHeaders from './CardHeaders/CardHeaders';
import ThumbsDownButton from './UpAndDownBox/ThumbsDownButton/ThumbsDownButton';
import ThumbsUpButton from './UpAndDownBox/ThumbsUpButton/ThumbsUpButton';

export default function CardContent () {
    return(
        <div>
            <CardHeaders />
            <ThumbsUpButton />
            <ThumbsDownButton /> 
        </div>
    );
    
}