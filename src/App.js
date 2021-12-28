
import React, { useEffect } from 'react';
import Emaillist from './components/Emaillist';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Compose from './components/Compose';
import { useDispatch, useSelector } from 'react-redux';
import { selectmail  } from './features/mailSlice';
import Emaildetail from './components/Emaildetail';
import {
  BrowserRouter as Router,
  Routes ,
  Route
 
} from "react-router-dom";
import Login from './Login';
import { selectuser, signin,signout } from './features/userSlice';
import { auth } from './Firebase';


function App() {
  const ismessageopen =useSelector(selectmail);
  const user =useSelector(selectuser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch(signin({
          displayName:user.displayName,
          photoURL:user.photoURL,
          email:user.email

        }))
      }
      else{
        dispatch(signout());
      }
    })
    
  }, [])

  console.log("our user is === ");
  console.log(user);
  return (
    <Router>
      {
        user ? (
          <div className="App">
      <Header/>

      <div className='app_body'>
          <Sidebar/>
          <Routes>
          <Route exact path="/" element={<Emaillist/>} />
          <Route path="/mail" element={<Emaildetail/>}/> 
            
          
        </Routes>
          
          
      </div>
      {ismessageopen &&
        <Compose/>
      }
       
    </div>
        ):(
          <Login/>
        )
      }
    
    
    </Router>
  );
}

export default App;
