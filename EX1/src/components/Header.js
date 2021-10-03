import React from 'react'
import HeaderCSS from'./Header.module.css';
export default function Header() {
    return (
        <div className ={HeaderCSS.background}>
            <div className = {HeaderCSS.container}>
                <div className = {HeaderCSS.firstThree}>
                    <div className ={HeaderCSS.brand}>
                    HELSINGIN SANOMAT</div>
                <div className={HeaderCSS.uutiset}>
                    Uutiset</div>
                <div className={HeaderCSS.lehdet}>
                    Lehdet</div>
            </div>
                <div className ={HeaderCSS.lastThree}>
                     <div className ={HeaderCSS.subscribe}>
                         Tilaa</div>
                     <div className={HeaderCSS.kirjaudu}>
                         Kirjaudu</div>
                     <div className={HeaderCSS.hae}>
                         Hae</div>
                     <div className={HeaderCSS.valikko}>
                         Valikko</div>
                     </div>
            </div>
        </div>
    )
}
