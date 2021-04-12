import React from 'react'
import './SidebarOptions.css';



function SidebarOptions({active,Text,Icon}) {
    return (
        <div className={`sidebarOptions ${active && `sidebarOptions--active`}`}>
            <Icon/>
            <h2>{Text}</h2>
        </div>
    )
}

export default SidebarOptions
