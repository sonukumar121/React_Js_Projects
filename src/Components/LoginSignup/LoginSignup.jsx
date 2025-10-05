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
            <input className="inp" type="text" placeholder='UserName'/>
            </div>


          <div className="logo"> 
            {/* <img src={email} alt="" /> */}
            <input className="inp" type="email" placeholder='Email Id' />
            </div>


          <div className="logo">
            {/* <img src={password} alt="" /> */}
             <input className="inp" type="password" placeholder='Password' />
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
          <input className="inp"type="email" placeholder='Email Id' />
          <input className="inp"type="password" placeholder='Password' />
          <div className='forgot'>
            <p className='fp'>
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
          <input className="inp" type="email" placeholder='Enter your registered email' />
          <button className="submit1" onClick={()=> setAction("Verify_Password")}>Reset Password</button>
          <p className='back_to_login'
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
           <p className='r_a_c'>Didnt you recieve any code? <a onClick={()=> setAction("Resend_Code")}style={{ textDecoration:'none'}}href="#">Resend Code</a></p>
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
         

           <button className='verify' onClick={() => setAction("Create_New_Password")}>Verify Code</button> 
           <p className='r_a_c'>Didnt you recieve any code? <a onClick={()=> setAction("Resend_Code")}style={{ textDecoration:'none'}}href="#">Resend Code</a></p>
        </>
      );
      break;

    //  /resend code pe onclick lgaoo and then chnage only msg.


     


      case "Resend_Code":
      content = (
        <>
       <h1 className='v'>Check Your email</h1>
       <p className='otps'>we sent a reset link to contact@dscode.. com <br />enter 5 digit code that mentioned in the email</p>
        <div className='btn2' onClick={()=> setAction("number_otp")} id='bt2'>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>

        </div>
         

           <button className='verify' onClick={() => setAction("Create_New_Password")}>Verify</button> 
           <p className='r_a_c'>Didnt you recieve any code? <a href="#" >Resend Code</a></p>
        </>
      );
      break;


   


      
      case "Create_New_Password":
      content = (
        <>
        <div className='cnp_div'>
             <h1 style={{ width:'34vw'}}>Set a new Password</h1>

           <p style={{ width:'34vw',paddingBottom:'3vw'}}>Create a new password.Ensure it differs from previous ones for security</p>
           <div className='cnp'>
              <p>Password</p>
              <input className="inp" type="text" placeholder='Enter your Password'/>
              <p>Confirm Password</p>
              <input className="inp" type="text"  placeholder='Confirm your password'/>
                         <button className='resetbtn'style={{ height:'3vw',width:'12vw',backgroundColor:'rgb(0, 97, 255',color:'white'}} onClick={() => setAction("Password_Update")}>Reset Password</button>

           </div>
        </div>
        
        </>
      );
      break;



         
  case "Password_Update":
      content = (
        <> 
          <div className="last1">
            <button className='right_logo'>✓</button>
            <h2>Sucessfull</h2>
            <p>Congratulations! Your Password has been  changed.Click continue to login.</p>
            <button onClick={()=>setAction("Login")}>Update Password</button>
          </div>
        </>
      );
      break;


        

    default:
      content = <p>Invalid Action</p>;


  }






  return (
    <div className='container'>
      <div key={action} className={`box slide-up`}>
        {content}

        {/* Button block only for Sign Up and Login */}
        {(action === "Sign Up" || action === "Login") && (
          <div className='btn'>
            <button id="btn1" className={`btn1 ${action === "Sign Up" ? "gray" : "submit"}`} onClick={() => setAction("Sign Up")} > Sign Up </button>
            <button id="btn1" className={`btn1 ${action === "Login" ? "gray" : "submit"}`} onClick={() => setAction("Login")} > Login  </button>
          </div>
        )}


      </div>
    </div>
  );
};

export default LoginSignup;
