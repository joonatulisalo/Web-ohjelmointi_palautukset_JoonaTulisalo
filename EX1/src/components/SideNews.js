import React from 'react'
import SideNewsCSS from './SideNews.module.css'

export default function SideNews(props) {
    return (
   
        <div className = {SideNewsCSS.container}>
            <span className = {SideNewsCSS.numerot}>{props.numero}</span>
            <span className = {SideNewsCSS.otsikot}>{props.otsikko}</span>
            
            
           
       
    </div>
    


         
       
    )
}
