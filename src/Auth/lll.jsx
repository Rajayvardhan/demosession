import React, {useState, useEffect} from 'react'
import "./SignIn.css";
import { useNavigate } from 'react-router';
import { BaseURL } from '../api/DataApis';
// import { useNavigate } from 'react-router';
 const Login =  () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[LoginCredential, setLoginCredentials] = useState([]);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
   const handleLogin = async() => {
     alert("okkk")
   try {
    // Make an API request to authenticate the user
      const response = await fetch(`${BaseURL}/webservices/login`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
          },
           body: JSON.stringify({ username, password }),
         });
        if (response.status == 200 ) {
          // Authentication successful
  //         //do something...
           navigate("/dashboard/default");
           console.log('Login successful');
           setLoginCredentials(response.data);
         } 
         
         
         
         
         
         else {
           // Authentication failed
           console.error('Login failed');
         }
        } catch (error) {
          console.error('Error during login:', error);
        }
    };

  return (
    <form>
    
       <div className="container">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
            <div className='main_part_form'>
                <div class="form_img">
                    <h2>Login </h2>
                    <div className="">
                        <input className="form-inputRE mt-3"  onChange="" type="email"  placeholder="EMAIL"/>
                    </div>
                    <div className="">
                        <input className="form-inputRE mt-3"  type="text" placeholder="PASSWORD"/>
                    </div>
                    <div className="">
                        <button className="create_account">Login</button>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
       </div>
       
</form>
  )
}
export default Login


 // import React, {useState, useEffect} from 'react'
 // import "./SignIn.css";
//import { useNavigate } from 'react-router';
// import { useNavigate } from 'react-router';
//const Login =  () => {
  //  const navigate = useNavigate()
    //const [username, setUsername] = useState('');
    //const [password, setPassword] = useState('');
    //const handleUsernameChange = (e) => setUsername(e.target.value);
    //const handlePasswordChange = (e) => setPassword(e.target.value);
    // const handleLogin = async() => {
    //   alert("okkk")
    //   try {
    //       // Make an API request to authenticate the user
    //       const response = await fetch('https://demo.keendroid.in/webservices/login', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ username, password }),
    //       });
    //       if (response.status == 200 ) {
    //           // Authentication successful
    //           //do something...
    //           navigate("/dashboard/default");
    //           console.log('Login successful');
    //         } else {
    //           // Authentication failed
    //           console.error('Login failed');
    //         }
    //       } catch (error) {
    //         console.error('Error during login:', error);
    //       }
    //     };
  
    //return (
    //  <form>
      
       //    <div className="container">
       //     <div className="row">
          //      <div className="col-lg-2"></div>
        //        <div className="col-lg-5">
   //             <div className='main_part_form'>
   //                 <div class="form_img">
   //                     <h2>Login </h2>
   //                     <div className="">
   //                         <input className="form-inputRE mt-3"  onChange="" type="email"  placeholder="EMAIL"/>
   //                     </div>
   //                     <div className="">
   //                         <input className="form-inputRE mt-3"  type="text" placeholder="PASSWORD"/>
   //                     </div>
   //                     <div className="">
   //  //                         <button className="create_account">Login</button>
                 //     </div>
   //                     
   //                 </div>
   //                 </div>
   //             </div>
   //         </div>
   //        </div>
   //        
   // </form>
   //   )
   // }
   // export default Login