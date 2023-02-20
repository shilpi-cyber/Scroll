import React from 'react'

export default function Signup() {
  return (
    <div >
      <h1 className="h3 mb-3 fw-normal" style={{color: 'blue'}}><b>Sign Up</b></h1>

<div className="form-floating" style={{width: '40%' , padding:'3px', alignContent:'center'}}>
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating" style={{width: '40%' , padding:'3px'}}>
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>

<div className="checkbox mb-3" style={{color: 'blue'}}>
  <label>
    <input type="checkbox" value="remember-me"/> Remember me
  </label>
</div>
<button className="w-30 btn btn-lg btn-primary" type="submit">Sign Up</button>
<p className="mt-5 mb-3 text-muted">&copy; Developed by Shilpi Kaushik</p>  
    </div>
  )
}
