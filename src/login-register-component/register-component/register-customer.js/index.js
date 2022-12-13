import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { registerThunk } from '../../../users/user-thunks';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

function RegisterCustomer() {

    const [userName, setUserName] = useState('admin')
    const [email, setEmail] = useState('admin@admin.com')
    const [firstName, setFirstName] = useState('First')
    const [lastName, setLastName] = useState('Last')
    const [password, setPassword] = useState('admin@123')
    const [validatePassword, setValidatePassword] = useState('admin@123')
    const [location, setLocation] = useState('Boston')
    const [phone, setPhone] = useState("12345678")
    const [error, setError] = useState(null)
    const role = "CUSTOMER"
    const [dateOfBirth, setDateOfBirth] = useState(null)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {userName, firstName, lastName, email, password, location, phone, role, dateOfBirth}
        dispatch(registerThunk(newUser))
    }

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

            {
              error &&
              <div className="alert alert-danger">
                  {error}
              </div>
            }
              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Hunger Saviors</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign up as customer</h5>

                <MDBInput wrapperClass='mb-4' label='First name' id='formControlLg' type='text' size="lg" onChange={(e) => setFirstName(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Last name' id='formControlLg' type='text' size="lg" onChange={(e) => setLastName(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" onChange={(e) => setUserName(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Confirm password' id='formControlLg' type='password' size="lg" onChange={(e) => setValidatePassword(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Address' id='formControlLg' type='text' size="lg" onChange={(e) => setLocation(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Date of birth' id='formControlLg' type='date' size="lg" onChange={(e) => setDateOfBirth(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Phone' id='formControlLg' type='text' size="lg" onChange={(e) => setPhone(e.target.value)}/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={() => handleRegisterBtn()}><Link to="/login">Register as customer</Link></MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already have an account? <Link to="/login" style={{color: '#393f81'}}>Login here</Link></p>

            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default RegisterCustomer;