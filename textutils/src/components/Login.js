import React from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom'

export default function Login() {

  return (
    
    <form >
  <div class="mb-3">
  <h1 className="h3 mb-3 fw-normal" style={{color: 'blue' }}><b>Login</b></h1>
    <label for="username" class="form-label" style={{color: 'blue', width:'40%'}}>UserName</label>
    <input type="username"  style={{color: 'blue', width:'40%'}} placeholder="shilpikaushik"   class="form-control" id="username" name="username" aria-describedby="emailHelp"/> 
  </div>
  <div class="mb-3">
    <label for="password" class="form-label" style={{color: 'blue' , width:'40%', left:'40%'}}>Password</label>
    <input type="password"   style={{color: 'blue', width:'40%', left:'40%'}} placeholder="********" class="form-control" name="password" id="password"/>
  </div>
  <Link class="btn btn-primary" to="/main" role="button">Submit</Link>
  <p className="mt-5 mb-3 text-muted">Click on the Submit Button to see all the user Details</p> 
</form>

  )
  }
