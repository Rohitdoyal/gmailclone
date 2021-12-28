import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IconButton,Avatar } from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

import '../css/header.css'
import { useSelector } from 'react-redux';
import { selectuser } from '../features/userSlice';

import { auth } from '../Firebase';

const Header = ()=> {

    const user= useSelector(selectuser);
    console.log("phot is here");
    console.log(user);
    return (
        <div className='header'>
            <div className='header_left'>
                
                <IconButton >
                    <ReorderIcon></ReorderIcon>
                </IconButton>
                <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' alt="logo" />
     
            </div>

            {/* left part done */}

            <div className='header_mid'>
                <div className='searchmail'> 

               
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input type='text' placeholder='search mail' />
                <IconButton><KeyboardArrowDownIcon/></IconButton>
                </div>
                
            </div>
            <div className='header_right'>
            <IconButton >
                <HelpOutlineIcon/>
            </IconButton>
            <IconButton >
                <SettingsIcon/>
            </IconButton>
            <IconButton >
                <AppsIcon/>
            </IconButton>

            
            <Avatar src={user?.photoURL} onClick={()=>auth.signOut()} alt='photo'/>
            
           
            

            </div>
        </div>
    )
}

export default Header
