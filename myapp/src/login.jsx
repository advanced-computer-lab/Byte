import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import './mycss.css';

function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const form = e.target;
    const user = {
      username: form[0].value,
      password: form[1].value,
    };

    console.log(user);

    axios({
      method: 'post',
      url: 'http://localhost:8000/user/signin',
      headers: {
        'Content-type': 'application/json',
      },
      params: JSON.stringify(user),
    })
      .then((res) => console.log('res: ' + JSON.stringify(res)))
      .then((data) => {
        console.log('data: ' + data);
        //localStorage.setItem('token', data.token);
      });
  }

  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://localhost:8000/user/isUserAuth',
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    }).then((res) => {
      return res.data.isLoggedIn.isLoggedIn ? navigate('/home') : null;
    });
  }, []);

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
