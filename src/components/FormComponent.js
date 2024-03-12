import './FormComponent.css'
import {useState} from "react"


const FormComponent = () => {
  const [userName,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [repassword,setRePassword] = useState('')

  const [errorUsername,setErrorUsername] = useState('')
  const [errorEmail,setErrorEmail] = useState('')
  const [errorPassword,setErrorPassword] = useState('')
  const [errorRePassword,setErrorRePassword] = useState('')

  const [userNameColor,setUserNameColor] = useState('')
  const [emailColor,setEmailColor] = useState('')
  const [PasswordColor,setPasswordColor] = useState('')
  const [RePasswordColor,setRePasswordColor] = useState('')

  const validateForm = (e)=>{
    e.preventDefault();
    if(userName.length > 8){
      setErrorUsername('')
      setUserNameColor('green')
    }else{
      setErrorUsername('Input 8 Wording')
      setUserNameColor('red')
    }

    if(email.includes("@")){
      setErrorEmail('')
      setEmailColor('green')
    }else{
      setErrorEmail('Invid emil format')
      setEmailColor('red')
    }

    if(password.length > 7){
      setErrorPassword('')
      setPasswordColor('green')
    }else{
      setErrorPassword('Password reqiure more 7 key')
      setPasswordColor('red')
    }

    if(repassword === password && repassword !== ""){
      setErrorRePassword('')
      setRePasswordColor('green')
    }else if(repassword === ""){
      setErrorRePassword('Password is null')
      setRePasswordColor('red')
    }else{
      setErrorRePassword('Password is not match')
      setRePasswordColor('red')
    }


  }

  return (
    <div className="container"> 
      <form className="form" onSubmit={validateForm}>
        <h2>Form Register</h2>
        <div className="form-control">
          <label>Username</label>
          <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} style={{borderColor:userNameColor}}/>
          <small style={{color:userNameColor}}>{errorUsername}</small>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
          <small style={{color:emailColor}}>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>Pasword</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:PasswordColor}}/>
          <small style={{color:PasswordColor}}>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>Confirm Password</label>
          <input type="password" value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:RePasswordColor}}/>
          <small style={{color:RePasswordColor}}>{errorRePassword}</small>
        </div>
        <button type="submit">Register</button>

      </form>
    </div>
  )
}

export default FormComponent