import React, { useState } from 'react';
import './LoginSignup.css';
import google from '../Assets/google.png';
import fb from '../Assets/fb.png';
import github from '../Assets/github.png';
import insta from '../Assets/insta.png';
import right from '../Assets/right_logo.png';
import arrow_back from '../Assets/arrow_back.png';
import user from '../Assets/user.png';
import email from '../Assets/email.png';
import password from'../Assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  let content;

  switch (action) { //passing the value of action variable.
    case "Sign Up":
      content = (
        <>
          <h1 className='su'>Sign Up</h1>
          <div className="logo"> 
            {/* <img src={user} alt="" /> */}
            <input type="text" placeholder='UserName'/>
            </div>


          <div className="logo"> 
            {/* <img src={email} alt="" /> */}
            <input type="email" placeholder='Email Id' />
            </div>


          <div className="logo">
            {/* <img src={password} alt="" /> */}
             <input type="password" placeholder='Password' />
             </div>

         
         
         
          <div className='icons'> 
              <img className="icon1"src={google} alt="" />
              <img className="icon2"src={fb} alt="" />
              <img className="icon3"src={github} alt="" />
              <img className="icon4"src={insta} alt="" />
          </div>
        </>
      );
      break;

    case "Login":
      content = (
        <>
          <h1 className='su'>Login</h1>
          <input type="email" placeholder='Email Id' />
          <input type="password" placeholder='Password' />
          <div className='forgot'>
            <p>
              Forgot Password?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setAction("Forgot_Password");
                }}
              >
                Click Here
              </a>
            </p>
          </div>
        </>
      );
      break;

    case "Forgot_Password":
      content = (
        <>
          <h1 className='su2'>Forgot Password</h1>
          <input type="email" placeholder='Enter your registered email' />
          <button className="submit1" onClick={()=> setAction("Verify_Password")}>Reset Password</button>
          <p
            onClick={() => setAction("Login")}
            style={{ cursor: 'pointer', color: 'blue', marginTop: '1vw' }}
          >
            ← Back to Login
          </p>
        </>
      );
      break;

      
      case "number_otp":
      content = (
        <>
       <h1 className='v'>Check Your email</h1>
       <p className='otps'>we sent a reset link to contact@dscode.. com <br />enter 5 digit code that mentioned in the email</p> 
       
        <div onClick={()=> setAction("number_otp")}  className='btn2' id='bt2'>
            <button>8</button>
            <button>4</button>
            <button>0</button>
            <button>9</button>
            <button>0</button>
            <button>6</button>

        </div>
         

           <button className='verify'  style={{cursor:'pointer'}}onClick={()=> setAction("Password_reset_confirm")}>Verify Code</button> 
           <p>Didnt you recieve any code? <a onClick={()=> setAction("Resend_Code")}style={{ textDecoration:'none'}}href="#">Resend Code</a></p>
        </>
      );
      break;
      

      // passwordd reset confirm section Create_New_Password

       case "Password_reset_confirm":
      content = (
        <>

        <div className='confirm'> 
             <h2>Password reset</h2>
             <p style={{color:'gray'}}>Your password has been sucessfully reset.click confirm to set a new password</p>
             <button onClick={()=> setAction("Create_New_Password")}style={{height:'3vw'}}>Confirm</button>
        </div>
         
        </>
      );
      break;



















      case "Verify_Password":
      content = (
        <>
       <h1 className='v'>Check Your email</h1>
       <p className='otps'>we sent a reset link to contact@dscode.. com <br />enter 5 digit code that mentioned in the email</p> 
       
        <div onClick={()=> setAction("number_otp")}  className='btn2' id='bt2'>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>

        </div>
         

           <button className='verify'  onClick={()=> setAction("Create_New_Password")}>Verify Code</button> 
           <p>Didnt you recieve any code? <a onClick={()=> setAction("Resend_Code")}style={{ textDecoration:'none'}}href="#">Resend Code</a></p>
        </>
      );
      break;

    //  /resend code pe onclick lgaoo and then chnage only msg.


     


      case "Resend_Code":
      content = (
        <>
       <h1 className='v'>Verify your account</h1>
       <p className='otps'>Enter the New 5-digit code sent to your email</p>
        <div className='btn2'>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>

        </div>
         

           <button className='verify' onClick={()=> setAction("Create_New_Password")}>Verify</button> 
           <p>Didnt you recieve any code? <a href="#" >Resend Code</a></p>
        </>
      );
      break;




      
      case "Create_New_Password":
      content = (
        <>
         <h1 style={{ width:'34vw'}}>Create New Password</h1>

           <p style={{ width:'34vw',paddingBottom:'3vw'}}> Set a Strong Password to secure access.</p>
           <div className='cnp'>
              <p>Password</p>
              <input type="text" placeholder='Enter your Password'/>
              <p>Confirm Password</p>
              <input type="text"  placeholder='Confirm your password'/>
           </div>
           <button className='resetbtn'style={{ height:'3vw',width:'12vw',backgroundColor:'rgb(0, 97, 255',color:'white'}}>Reset Password</button>
        </>
      );
      break;



      


    default:
      content = <p>Invalid Action</p>;


  }






  return (
    <div className='container'>
      <div className='box'>
        {content}

        {/* Button block only for Sign Up and Login */}
        {(action === "Sign Up" || action === "Login") && (
          <div className='btn'>
            <button id="btn1"className={action === "Sign Up" ? "gray" : "submit"} onClick={() => setAction("Sign Up")} > Sign Up </button>
            <button  id="btn1" className={action === "Login" ? "gray" : "submit"} onClick={() => setAction("Login")} > Login  </button>
          </div>
        )}


      </div>
    </div>
  );
};

export default LoginSignup;
