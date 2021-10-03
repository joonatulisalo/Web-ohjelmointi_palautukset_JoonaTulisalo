import React from 'react'
import ResultsCSS from './Results.module.css'
export default function Results(props) {
    return (
        <div className = {ResultsCSS.discs}>
            <div>
                <div className={ResultsCSS.pic}><img src={`/images/${props.image}`} /></div>
                <div className={ResultsCSS.brand}>{props.brand}</div>
                <div className={ResultsCSS.plastic}>{props.plastic}</div>
                <div className={ResultsCSS.disc}>{props.disc}</div>
                <div className={ResultsCSS.price}>{props.price}</div>
            </div>
        </div>
    )
}
