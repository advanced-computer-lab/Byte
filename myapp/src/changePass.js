import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import './mycss.css';

function Password() {
  const navigate = useNavigate();
  var refreshToken;

  function handleChangePass(e) {
    e.preventDefault();

    const form = e.target;
    var old = form[0].value;
    var neww = form[1].value;
    var neww2 = form[2].value;

    axios({
      method: 'POST',
      url: 'http://localhost:8000/user/changePass',
      headers: { authorization: localStorage.getItem('token') },
      params: { old_pass: old, new_pass: neww , new_pass2: neww2},
    }).then(res => {
      alert(res.data.message);
    });
  }

  return (
    <div className='auth-wrapper center-screen'>
      <div className='auth-inner'>
        <form onSubmit={(event) => handleChangePass(event)}>
          <div className='form-group'>
            <label>Enter Old Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter old password'
              required
            />
          </div>

          <div className='form-group'>
            <label>Enter New Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter new password'
              required
            />
          </div>

          <div className='form-group'>
            <label>Enter New Password Again</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter new password Again'
              required
            />
          </div>

          <button type='submit' className='btn btn-primary btn-block'>
            Change
          </button>
        </form>
      </div>
    </div>
  );
}

export default Password;
