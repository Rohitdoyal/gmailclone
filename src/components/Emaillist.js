import React,{useState,useEffect} from 'react'
import '../css/emaillist.css'
import { db } from '../Firebase';
import Emailbody from './Emailbody';
import Emaillistsetting from './Emaillistsetting';
import Emailtype from './Emailtype';

function Emaillist() {

    const [email, setemail] = useState([]);
    useEffect(()=>{
        //onsnapshot means real time database 
        db.collection("email").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setemail(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[])
    //console.log(email);
    
    return (
        <div className='emaillist'>
            <Emaillistsetting/>
            <Emailtype/>
            {
                email.map(({id,data})=>{
                    return <Emailbody name={data.fromname} key={id} subject={data.subject} msg={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleDateString()}/>
            
                })
            }

            
            
        </div>
    )
}

export default Emaillist
