import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
     <section className="login_page_section">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-6 col-12">
<div className="login_page_div_main">
    <h3>Login</h3>
    <form action>
  <label>Email ID</label>
  <div className="input-group mb-3">
    <span className="input-group-text fa fa-envelope" id="basic-addon1"></span>
    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
  </div>
  <label>Password</label>
  <div className="input-group mb-3">
    <span className="input-group-text fa fa-lock" id="basic-addon1"></span>
    <input type="password" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
  </div>

<button type='submit' className='btn btn'>Login</button>
<div className="login_div_flx">
    <p>Forget your password ? <Link to="">Reset now</Link></p>
    <p><Link to="">Creat an new account</Link></p>
</div>

</form>

</div>
        </div>
    </div>
</div>
     </section>
    </>
  )
}

export default Login

