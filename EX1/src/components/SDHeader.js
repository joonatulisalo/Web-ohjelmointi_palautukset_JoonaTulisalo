import React from 'react'
import SDHeaderCSS from './SDHeader.module.css'
export default function SDHeader() {
    return (
        <div className = {SDHeaderCSS.container}>
            <span className = {SDHeaderCSS.title}>
                Luetuimmat
            </span>
        </div>
    )
}
