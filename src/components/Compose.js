import React ,{useState } from 'react'
import '../css/compose.css'
import MinimizeOutlinedIcon from '@mui/icons-material/MinimizeOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import FormatColorFillOutlinedIcon from '@mui/icons-material/FormatColorFillOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch, useSelector} from "react-redux";
import { closeSendmessage } from '../features/mailSlice';
import {db} from '../Firebase';
import firebase from "firebase/compat/app";
import { selectuser } from '../features/userSlice';


function Compose() {
    
    const dispatch = useDispatch();
    const [to, setto] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");
    
    const user= useSelector(selectuser);

    const formSubmit=(e)=>{
        e.preventDefault();
        if(to===""){
            return alert("to is required");
        }

        if(message===""){
            return alert("message is required");
        }
        if(subject===""){
            return alert("subject is required");
        }
        db.collection("email").add({
            to:to,
            subject:subject,
            message:message,
            from:user.email,
            fromname:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })

        
        alert(`form submitted ${to}`);
        dispatch(closeSendmessage());
    }

    return (
        <div className='compose'>

        <div className='compose_header'>
            <div className='compose_header_left'>
                <span>New Message</span>
            </div>
           
            <div className='compose_header_right'>
                <MinimizeOutlinedIcon/>
                <CloseFullscreenOutlinedIcon />
                <CloseOutlinedIcon onClick={()=>dispatch(closeSendmessage())}/>

            </div>
        </div>

        <form onSubmit={formSubmit}>
        <div className='compose_body'>
            
            <div className='compose_bodyform'>
                <input type="email" placeholder="reciepents" value={to} onChange={(e)=>setto(e.target.value)}/>

                <input type="text" placeholder="Subject" value={subject} onChange={(e)=>setsubject(e.target.value)}/>
                <textarea rows="20" placeholder="Text" onChange={(e)=>setmessage(e.target.value)}>
                    {message}
                </textarea>

            </div>
        </div>
        <div className='compose_footer'>
            <div className='compose_footer_left'>
            <button type='sub,it'>Send
            <ArrowDropDownOutlinedIcon/>
            </button>
            
            </div>

            <div className='compose_footer_right'>
            <FormatColorFillOutlinedIcon/>
            <EmojiEmotionsOutlinedIcon/>
            <AttachFileOutlinedIcon/>
            <InsertLinkOutlinedIcon/>
            <NoteAddOutlinedIcon/>
            <AddAPhotoOutlinedIcon/>
            <CreateOutlinedIcon/>
            <DeleteOutlineOutlinedIcon/>
            </div>
            </div>
            </form>
        </div>
       
        
    )
}

export default Compose
