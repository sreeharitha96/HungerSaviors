import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { registerThunk } from '../../../users/user-thunks';
import { Button } from 'react-bootstrap';

function RegisterCustomer() {

    const [userName, setUserName] = useState('admin')
    const [email, setEmail] = useState('admin@admin.com')
    const [name, setName] = useState('admin')
    const [password, setPassword] = useState('admin@123')
    const [validatePassword, setValidatePassword] = useState('admin@123')
    const [location, setLocation] = useState('Boston')
    const [phone, setPhone] = useState("12345678")
    const [error, setError] = useState(null)
    const role = "DONOR"
    const [dateOfBirth, setDateOfBirth] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {userName, name, email, password, location, phone, role, dateOfBirth}
        dispatch(registerThunk(newUser))
    }

  const container1 = {
    height: '100%',
  };
  const firstHalf = {
    backgroundColor: '#F5F3F0',
    height: '100%',
  };
  const secondHalf = {
    backgroundColor: '#2A4E49',
    height: '100%',
    display: 'flex',
  };

  const centerDiv = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const headerStyle = {
    color: '#ffffff',
  };

  const forms = {
    marginTop: '30px',
    backgroundColor: '#2A4E49',
    color: '#ffffff',
    outline: 'none',
  };

  const submitButton = {
    marginTop: '10px',
    backgroundColor: '#EA7035',
    border: 'none',
    padding: '10px 40px',
  };

  return (
    <div className="container" style={container1} fluid="true">
      <div className="row"style={{ height: '100%' }}>
        <div className="col"style={firstHalf}></div>
        <div className="col"style={secondHalf}>
          <div className="container" style={centerDiv}>
            <div className="row">
              <h1 style={headerStyle}>Register</h1>
              {/* <p style={headerStyle}> I'm a professional</p> */}
              <div className="container">
                {
                  error &&
                  <div className="alert alert-danger">
                      {error}
                  </div>
                }
                <form>
                    <div className='form-group' style={forms}>
                        <label htmlFor="register-name">First Name</label>
                        <input type="text" className="forms" placeholder="Enter first name" id="register-name" onChange={(e) => setName(e.target.value)}/> 
                    </div>
                    <div className='form-group' style={forms}>
                        <label htmlFor="register-name">Username</label>
                        <input type="text" className="forms" placeholder="Enter user name" id="register-name" onChange={(e) => setUserName(e.target.value)}/> 
                    </div>
                    <div className='form-group' style={forms}>
                        <label htmlFor="register-email">Email address</label>
                        <input type="email" className="forms" placeholder="Enter email" id="register-email" onChange={(e) => setEmail(e.target.value)}/> 
                    </div>
                    <div className="form-group" style={forms}>
                        <label htmlFor="register-password">Password</label>
                        <input type="password" className="forms" placeholder="Password" id="register-password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group" style={forms}>
                        <label htmlFor="register-password-re-enter">Re-enter Password</label>
                        <input type="password" className="forms" placeholder="Password" id="register-password-re-enter" onChange={(e) => setValidatePassword(e.target.value)}/>
                    </div>
                    <div className="form-group" style={forms}>
                        <label htmlFor="register-location">Enter location</label>
                        <input type="text" className="forms" placeholder="location" id="register-location" onChange={(e) => setLocation(e.target.value)}/>
                    </div>
                    <div className="form-group" style={forms}>
                        <label htmlFor="register-dob">Enter location</label>
                        <input type="date" className="forms" id="register-dob" onChange={(e) => setDateOfBirth(e.target.value)}/>
                    </div>
                    <div className='form-group' style={forms}>
                        <label htmlFor='register-phone'>Enter phone</label>
                        <input type='text' className='forms' id='register-phone' onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <Button style={submitButton} onClick={handleRegisterBtn}>Register</Button>
                </form>

                {
                  currentUser &&
                  <h2>Welcome {currentUser.userName}</h2>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterCustomer;