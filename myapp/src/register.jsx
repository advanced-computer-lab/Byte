import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import './mycss.css';

function Register() {
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    const form = e.target;
    const user = {
      first_name: form[0].value,
      last_name: form[1].value,
      email: form[2].value,
      password: form[3].value,
      username: form[4].value,
      passport_number: form[5].value,
      address: form[6].value,
      code: form[7].value,
    };

    console.log(user);

    axios({
      method: 'post',
      url: 'http://localhost:8000/user/signup',
      headers: {
        'Content-type': 'application/json',
      },
      params: JSON.stringify(user),
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
    <div className='auth-wrapper center-screen'>
      <div className='auth-inner'>
        <form onSubmit={(event) => handleRegister(event)}>
          <h3>Sign Up</h3>
          <div className='row'>
            <div className='column'>
              <div className='form-group'>
                <label>First name</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='First name'
                  required
                />
              </div>

              <div className='form-group'>
                <label>Last name</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Last name'
                  required
                />
              </div>

              <div className='form-group'>
                <label>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter email'
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
            </div>

            <div className='column'>
              <div className='form-group'>
                <label>Username</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='username'
                  required
                />
              </div>

              <div className='form-group'>
                <label>Passport Number</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Passport Number'
                  required
                />
              </div>

              <div className='form-group'>
                <label>Address</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Address'
                  required
                />
              </div>

              <div className='form-group'>
                <label>Postal Code</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Postal Code'
                  required
                />
              </div>
            </div>
          </div>
          <button type='submit' className='btn btn-primary btn-block'>
            Sign Up
          </button>
          <p className='forgot-password text-right'>
            Already registered <a href='/login'>sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
