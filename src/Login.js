
import React from 'react'
import { useDispatch } from 'react-redux';
import './css/login.css';
import { signin } from './features/userSlice';
import { auth, provider } from './Firebase';

function Login() {

    const dispatch = useDispatch()

    const loginfun=()=>{
        
        auth.signInWithPopup(provider).then(({user})=>{
            console.log(user);
            
            
            dispatch(signin({
                
                 displayName:user.displayName,
                 photoURL:user.photoURL,
                 email:user.email,
            }))

        }).catch(error=>{
            alert(error);
        })
    }
    return (
        <div className='loginwrapper'>
            <div className='logoimg'>
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" alt='no_image '/>
            </div>
            <button className='gmail_button' onClick={loginfun}> Login Gmail </button>
        </div>
    )
}

export default Login

