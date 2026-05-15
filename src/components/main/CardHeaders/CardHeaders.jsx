import style from './CardHeaders.module.css'

export default function CardHeaders({title='Cat , catherine' , name ='syo motoyama'}) {

    return(
        <div>
            <h3>{title}</h3>
            <p>{name}</p>
        </div>
    );
}