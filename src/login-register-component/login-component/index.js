import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../users/user-thunks.js';
import { Navigate } from 'react-router';
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
  MDBInput,
} from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';

function Login({ updateUser, userState }) {
  const [userName, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin@123');
  const { currentUser, error } = useSelector((state) => state.users);

  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const test = paths[1];

  useEffect(() => {
    if (test === 'login') {
      updateUser(true);
    }
  }, []);

  const dispatch = useDispatch();

  const handleLoginBtn = () => {
    const loginUser = { userName, password };
    dispatch(loginThunk(loginUser), [dispatch]);
  };

  console.log("currentUser: ", currentUser)
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="./images/logo.png"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: '#ff6219' }}
                />
                <span className="h1 fw-bold mb-0">Hunger Saviors</span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: '1px' }}
              >
                Login to your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Username"
                id="formControlLg"
                type="userName"
                size="lg"
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
              />

              <MDBBtn
                className="mb-4 px-5"
                color="dark"
                size="lg"
                onClick={() => handleLoginBtn()}
              >
                Login
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                Don't have an account?{' '}
                <Link to="/register" style={{ color: '#393f81' }}>
                  Register here
                </Link>
              </p>

              {currentUser && currentUser.role === 'CUSTOMER' && (
                <Navigate to="/home" />
              )}
              {currentUser && currentUser.role === 'DONOR' && currentUser.status === "Approved" && (
                <Navigate to={`/donor/${currentUser.userName}`} />
              )}
              {currentUser && currentUser.role === 'ADMIN' && (
                <Navigate to="/admin" />
              )}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
export default Login;
