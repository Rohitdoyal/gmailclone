import React from 'react'
import '../css/sidebaroption.css';

function SidebarOption({Icon,title,number,istrue}) {
    return (
        <div className={`sidebaroptions ${(istrue===true) && 'sidebaroptions--active'} `}>
            <Icon/>
            <h4>{title}</h4>
            <p>{number}</p> 
   
        </div>
    )
}

export default SidebarOption;
