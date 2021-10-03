import React from 'react'
import MainNewsCSS from './MainNews.module.css'
import pic from './Sieppaa.jpg'

export default function MainNews(props) {
    return (
    <div className = {MainNewsCSS.background}>
        <div className = {MainNewsCSS.kuva}>
            <img src ={pic} alt="pic"/>

        </div>
        <div className = {MainNewsCSS.container}>
            <div className = {MainNewsCSS.OT}>
                 <div className = {MainNewsCSS.otsikko}>
                HS-analyysi |
                 <div className = {MainNewsCSS.teksti}>
                 Valtio muutti SSAB-omistuksensa strategiseksi poistaakseen nopeasti liki kaikkien henkilö­autojen käytön verran hiili­päästöjä
               </div> 
            </div>
        </div>
            
            <div className = {MainNewsCSS.tiedot}>
                Talous  15:48
            </div>
        </div>
    </div>
    
    
    
    )
}
