import React from 'react'
import '../css/emaillist.css'
import { IconButton } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

function Emaillistsetting() {
    return (
        <div className='emaillist_settings'>
            <div className='left'>
                <IconButton>
                    <CheckBoxOutlineBlankIcon />
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
    )
}

export default Emaillistsetting
