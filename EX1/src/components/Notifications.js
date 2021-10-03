import React from 'react'
import NotificationsCSS from './Notifications.module.css'

export default function Notifications(props) {
    return (
        <div className = {NotificationsCSS.container}>
            <span className = {NotificationsCSS.title}>{props.topic}:</span>{props.text}
                 
                 
                 
        </div>
    )
}
