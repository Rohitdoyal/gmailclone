import React from 'react'
import '../css/emaillist.css'
import { IconButton } from '@material-ui/core';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function Emailtype() {
    return (
        <div className='emailtype'>
            <div className='emailtype_options emailtype_options--active'>
            <IconButton>
                <InboxIcon/>
                <p>Primary</p>
            </IconButton>
            </div>
            <div className='emailtype_options'>
            <IconButton>
                <PeopleAltIcon/>
                <p>Social</p>
            </IconButton>
            </div>

            <div className='emailtype_options'>
            <IconButton>
                <LocalOfferIcon/>
                <p>Promotion</p>
            </IconButton>

            </div>            
        </div>
    )
}

export default Emailtype
