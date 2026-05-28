import style from './CardHeaders.module.css'

export default function CardHeaders({category = 'Music' , title='Indie Beats' , author ='Liam Johnson'}) {

    return(
        <div >
            <h3>[{category}]{title}</h3>
            <p>{author}</p>
        </div>
    );
}