import React from 'react'
import {Button} from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';
import '../css/sidebar.css'
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';

import {useDispatch} from "react-redux";
import { openSendmessage } from '../features/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();
    return (
        <div className='sidebar'>
            
            <Button startIcon={<AddIcon/>} className='compose_btn' onClick={()=>dispatch(openSendmessage())}  >
                compose
            </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number="224" istrue={true}/>
            <SidebarOption Icon={SendIcon }     title="Sendmail" number="4" istrue={false}/>
            <SidebarOption Icon={StarRateIcon}  title="start" number="224" istrue={false}/>
            <SidebarOption Icon={WatchLaterIcon}title="Snoozer" number="224" istrue={false}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number="224" istrue={false}/>
            <SidebarOption Icon={DraftsIcon}    title="Draft" number="224" istrue={false}/>
            <SidebarOption Icon={DeleteIcon}    title="Delete" number="224" istrue={false}/>
            <SidebarOption Icon={FindInPageIcon}title="document" number="224" istrue={false}/>
            <SidebarOption Icon={ExpandMoreIcon}title="more" number="224" istrue={false}/>
            
            <hr></hr>
            <h3 className='sidebaroption_heading'>Meet</h3>
            
            <SidebarOption Icon={VideocamIcon}  title="Meet" number="224" istrue={false}/>
            <SidebarOption Icon={KeyboardIcon}  title="keyboard" number="224" istrue={false}/>
            
            
        </div>
    )
}

export default Sidebar;
