import React from 'react';

function Login() {
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

  const alignToCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

  const forgotPassword = {
    color: '#EA7035',
    marginTop: '20px',
  };

  return (
    <div className="container" style={container1} fluid>
      <div className="row"style={{ height: '100%' }}>
        <div className="col"style={firstHalf}></div>
        <div className="col"style={secondHalf}>
          <div className="container" style={centerDiv}>
            <div className="row">
              <h1 style={headerStyle}>Login</h1>
              <p style={headerStyle}> I'm a professional</p>
              <div className="container">
                <form>
                    <div>
                      <input type="radio" value="donor" name="user-type"/>Donor
                      <input type="radio" value="customer" name="user-type"/>Customer
                    </div>
                    <div className='form-group' style={forms}>
                      <label htmlFor="login-email">Email address</label>
                      <input type="email" className="forms" placeholder="Enter email" id="login-email"/> 
                    </div>
                    <div className="form-group" style={forms}>
                      <label htmlFor="login-password">Password</label>
                      <input type="password" className="forms" placeholder="Password" id="login-password"/>
                    </div>
                    <button type="submit" style={submitButton}>Submit</button>
                    <div className="container" style={alignToCenter} fluid>
                      <p style={forgotPassword}>Forgot Password?</p>
                    </div>
                </form>
                {/* <Form.Control placeholder="Passwords" style={forms} />
                <div className="container" style={alignToCenter} fluid>
                  <div className="row"style={{ marginTop: '50px' }}>
                    <Button style={submitButton}>Submit</Button>
                    <div className="container" style={alignToCenter} fluid>
                      <p style={forgotPassword}>Forgot Password?</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
