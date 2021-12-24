import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import './mycss.css';

function Login() {
  const navigate = useNavigate();
  var refreshToken;

  function handleLogin(e) {
    e.preventDefault();

    const form = e.target;
    const user = {
      username: form[0].value,
      password: form[1].value,
    };

    //console.log(user);

    axios({
      method: 'post',
      url: 'http://localhost:8000/user/signin',
      headers: {
        'Content-type': 'application/json',
      },
      params: JSON.stringify(user),
    }).then((res) => {
      refreshToken = JSON.stringify(res.data.refreshToken);
      window.localStorage.setItem("token", refreshToken);
      //console.log(token);
      if (refreshToken) {
        //console.log('here');
        navigate('/search');
      } else {
        //print out wrong usernamee or password
      }
    });
  }

  useEffect(() => {
    //console.log('tttt: ' + token);
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8000/user/isUserAuth',
    //   headers: {
    //     'Content-type': 'application/json',
    //     'authorization': window.localStorage.getItem("refreshToken"),
    //   },
    // }).then((res) => {
    //   console.log("token: " + window.localStorage.getItem("refreshToken"))
    //   //console.log('use eff res: ' + res.status);
    //   //return res.data.isLoggedIn.isLoggedIn ? navigate('/home') : null;
    // });
    
    //if user is logged in the i dont want him here again
    //console.log("tttt" + localStorage.getItem('token'))
    if(localStorage.getItem('token')){
      navigate('/search');
    }
  }, );

  return (
    // <form onSubmit={(event) => handleLogin(event)}>
    //   <input required type='email' />
    //   <input required type='password' />
    //   <input type='submit' value='submit' />
    // </form>
    <div className='auth-wrapper center-screen'>
      <div className='auth-inner'>
        <form onSubmit={(event) => handleLogin(event)}>
          <h3>Sign In</h3>

          <div className='form-group'>
            <label>User Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter username'
              required
            />
          </div>

          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter password'
              required
            />
          </div>

          {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

          <button type='submit' className='btn btn-primary btn-block'>
            Submit
          </button>
          <p className='forgot-password text-right'>
            <a href='/register'>Don't Have An Account?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
