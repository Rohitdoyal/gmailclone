import React from 'react'
import '../css/emaillist.css'
import { IconButton,Avatar } from '@material-ui/core';

import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectedmailon} from '../features/mailSlice'

function Emaildetail() {
    const history = useNavigate();

    const mail = useSelector(selectedmailon);
    console.log('mail is == ' );
    console.log(mail);
    return (
        <div className='emaildetail'>
        <div className='emaillist_settings'>
            <div className='left'>
                
                <IconButton>
                    <ArrowBackIcon onClick={()=>history('/')}/>
                </IconButton>
                
                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
                <IconButton>
                    <RefreshIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            <div className='right'>
                <p>1-50 of 10,222</p>
                <IconButton>
                    <ArrowLeftIcon />
                </IconButton>
                <IconButton>
                    <ArrowRightIcon />
                </IconButton>

            </div>
        </div>

        <div className='emaildetailmsg'>

        <div className='emaildetailheader'>
        <div className='emaildetailheader_left'>
            <h4>{mail.displayName}</h4>
            <IconButton><LabelImportantIcon/></IconButton>
        </div>
        <div className='emaildetailheader_right'>
                <IconButton>
                    <PrintIcon />
                </IconButton>
                <IconButton>
                    <LaunchIcon />
                </IconButton>
        </div>
        </div>

        <div className='emaildetailmidheader'>
        <div className='emaildetailmidheader_left'>
            
            <Avatar><LabelImportantIcon/></Avatar>
            <h4>{mail.subject}</h4>
            <p>{mail.name}</p>
        </div>

        <div className='emaildetailmidheader_right'>
            <p>{mail.time}</p>
                <IconButton>
                    <StarIcon/>
                </IconButton>
                <IconButton>
                    <ReplyIcon />
                </IconButton>
                <IconButton>
                    < MoreVertIcon />
                </IconButton>

               
        </div>
        </div>

        <div className='emaildetail_body'>
                <p>{mail.msg}</p>
        </div>
        </div>

        </div>
    )
}

export default Emaildetail
