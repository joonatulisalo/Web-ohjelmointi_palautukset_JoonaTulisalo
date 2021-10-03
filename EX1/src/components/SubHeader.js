import React from 'react'
import SubHeaderCSS from './SubHeader.module.css';

export default function SubHeader() {
    return (
    <div className ={SubHeaderCSS.background}>
        <div className = {SubHeaderCSS.container}>
            <div className ={SubHeaderCSS.title1}>
                Etusivu
            </div>
            <div className={SubHeaderCSS.title2}>
                HS Visio
                </div>
            <div className={SubHeaderCSS.title3}>
                Luetuimmat
                </div>
            <div className={SubHeaderCSS.title4}>
                Uusimmat
                </div>
            <div className={SubHeaderCSS.title5}>
                Politiikka
                </div>
            <div className={SubHeaderCSS.title6}>
                Kaupunki
                </div>
            <div className={SubHeaderCSS.title7}>
                Kulttuuri
                 </div>
            <div className={SubHeaderCSS.title8}>
                Tiede
                </div>
            <div className={SubHeaderCSS.title9}
                 >Hyvinvointi
                 </div>
            <div className={SubHeaderCSS.title10}>
                Ruoka
                </div>
            <div className={SubHeaderCSS.title11}>
                Nyt
                </div>
        </div>    
    </div>
            
    )
}
