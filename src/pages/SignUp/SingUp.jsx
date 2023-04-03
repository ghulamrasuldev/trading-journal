import React,{useState} from 'react'
import './Signup.css'
import { Grid } from '@mui/material'
import SignupImage from '../../assets/login/login.png'
import { useNavigate } from 'react-router-dom'
import MailIcon from '../../assets/login/mail.png'
import passwordIcon from '../../assets/login/key.png'
import { BiShow, BiHide } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa'
import { ModeComment } from '@mui/icons-material'
import ModeChange from '../../Theme/ChangeMode'
// import {lightTheme} from '../../Theme/theme'

const SingUp = () => {

  const lightTheme = ModeChange();
  
  const navigation = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name:""
  });
  const [emailError, setMailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [togglePassword,setTogglePassword]=useState(false)


    // handling Inputs
    const handleEmail = (e) => {
      setCredentials({
        ...credentials,
        email: e.target.value,
      });
      console.log(credentials.email);
    };
    const handlePassword = (e) => {
      setCredentials({
        ...credentials,
        password: e.target.value,
      });
      console.log(credentials.password);
    };
  
    const handleName = (e) => {
      setCredentials({
        ...credentials,
        name: e.target.value,
      });
      console.log(credentials.name);
    };
  
      // password validitons function
      const passwordValidation= () => {
        let isValid = true;
        if (credentials.password !== "") {
          if (credentials.password.length < 8) {
            isValid = false;
            setPasswordError("password is too short");
          } else {
              setPasswordError(" ")
          }
        } else {
          isValid = false;
          }
          if (credentials.password === '') {
              isValid = false;
              setPasswordError("Please insert Password")
          }
    
        return isValid;
      };
      // name validitons function
      const nameValidation= () => {
        let isValid = true;
        if (credentials.name !== "") {
          if (credentials.name.length < 3) {
            isValid = false;
            setNameError("name is too short");
          } else {
              setNameError(" ")
          }
        } else {
          isValid = false;
          }
          if (credentials.name === '') {
              isValid = false;
              setNameError("Please add name")
          }
    
        return isValid;
      };
    
        // Email Validation function
      const emailValidation = () => {
        if (credentials.email !== " ") {
          var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          var result= re.test(credentials.email);
          }
          if (!result) {
              
              setMailError("Wrong Email");
          } else {
              setMailError(" ")
          }
          return result
      };
    
     // Signup user 
     const SignupFunc = async () => {
      if ( nameValidation()===true && emailValidation()===true && passwordValidation()===true) {
        try {
          console.log('data Send')
          goToLogin();
        } catch (error) {
          console.log("Error", error.message);
        }
      }
  };
  

  // navigate to signup function
  const goToLogin = () => {
    navigation("/login", { replace: true });
  };

  return (
    <div >
      <div className="mainContainer" style={{backgroundColor:`${lightTheme.PageBackgroundColor}`}}>
        <div className="insideMain">
          <Grid container columnGap={10} className='grid'>
          <Grid item lg={4} md={6} sm={6}>
              <div className='imageDiv'>
                <img src={SignupImage} alt="SignupImage" className='img'/>
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={6}>
              <div className="formDiv">
                <p className='welcome' style={{color:`${lightTheme.headingColor}`}}>Welcome to</p>
                <p className='journaltrade' style={{color:`${lightTheme.headingTextColor}`}}>Journal Trade</p>
                <p className="error">{nameError}</p>
                <div className="userDivS">
                  {/* <img src={MailIcon} alt="Mail Icon" className='mailIcon'/> */}
                  <FaUserAlt size={20} className='mailIcon'/>
                  <div className='mailInputBox' >
                    <p className='mailtext' style={{color:`${lightTheme.headingColor}`}}>Name</p>
                    <input type="email" value={credentials.name} onChange={(e)=>handleName(e)} placeholder='example' className='mailInput'/>
                  </div>
                </div>
                <p className="error">{emailError}</p>
                <div className="mailDivS">
                  <img src={MailIcon} alt="Mail Icon" className='mailIcon'/>
                  <div className='mailInputBox'>
                    <p className='mailtext' style={{color:`${lightTheme.headingColor}`}}>Email</p>
                    <input type="email" value={credentials.email} onChange={(e)=>handleEmail(e)} placeholder='example@gmail.com'className='mailInput'/>
                  </div>
                </div>
                <p className="error">{passwordError}</p>
                <div className="passwordDivS">
                  <div className="insdePasswordDiv">
                  <img src={passwordIcon}  alt="password Icon" className="passwordIcon"/>
                  <div className='passwordInputBox'>
                    <p className='passwordtext' style={{color:`${lightTheme.headingColor}`}}>Password</p>
                    <input type={togglePassword? "text":"password"} value={credentials.password} onChange={(e)=>handlePassword(e)}  placeholder='********'className='passwordInput'/>
                  </div>
                  </div>
                  {
                    togglePassword?  <BiHide size={20} className="showHide" onClick={()=>setTogglePassword(!togglePassword)} />:  <BiShow size={20} className="showHide" onClick={()=>setTogglePassword(!togglePassword)} />
                  }
                 
                </div>
                <div className="SignupBtnDiv">
                  <button className="signupBtn" onClick={()=>SignupFunc()} style={{color:`${lightTheme.whiteText}`,backgroundColor:`${lightTheme.headingTextColor}`}}>Sign Up</button>
                </div>
                <p className="haveAccount" style={{color:`${lightTheme.headingColor}`}}>Have an account!<span className="register" onClick={()=>goToLogin()} style={{color:`${lightTheme.headingTextColor}`}}>Login</span></p>
              </div>
              </Grid>
          </Grid>
        </div>
      </div>

    </div>
  )
}

export default SingUp