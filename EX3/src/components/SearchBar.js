import React from 'react'
import SearchBarCSS from './SearchBar.module.css'
import Results from './Results'
export default function SearchBar(props) {
    return (
        <div>
        <div className = {SearchBarCSS.container}>
           {
               props.discs.map(item => <Results key={item.id}{...item}/>)
           }
        </div>
        </div>
    )
}
