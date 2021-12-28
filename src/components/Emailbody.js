import React from 'react'
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';

import '../css/emaillist.css';
import { useNavigate } from 'react-router-dom';
import { openmessage } from '../features/mailSlice';
import { useDispatch } from 'react-redux';

function Emailbody({name,subject,msg,time}) {
    const navigate = useNavigate();
    

    const dispatch = useDispatch()
    const setmail=()=>{
        dispatch(openmessage({
            name,
            subject,
            msg,
            time
        }))
        navigate('/mail');
        alert(" this is event==");
        console.log(openmessage);
        

    }

    return (
        <div className='emailbody' onClick={e=>setmail()}>
            <div className='emailbody_left'>
                
                <CheckBoxOutlineBlankOutlinedIcon/>
                <StarBorderOutlinedIcon/>
                <LabelOutlinedIcon/>
                <h4>{name}</h4>

            </div>
            <div className='emailbody_mid'>
                <div className='emailbody_msg'>
                    <p><b>{subject}</b> {msg} </p>

                </div>
        
            </div>
            <div className='emailbody_right'>
                <p>{time}</p>
            </div>


            
        </div>
    )
}

export default Emailbody
