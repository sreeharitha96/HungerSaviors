import React, { useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Login from './login-component';
import Register from './register-component';
import { useLocation } from 'react-router-dom';

function LoginRegister({ updateUser, userState }) {
  const container1 = {
    height: '100%',
    width: '50%',
    alignItems: 'center',
  };

  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const test = paths[1];

  // adding small changes
  useEffect(() => {
    if (test === 'login') {
      updateUser(true);
    }
  }, []);

  return (
    <div className="container" style={container1} fluid="true">
      <div className="row" style={{ height: '100%' }}>
        <Tabs variant="pills" defaultActiveKey="tab-1" align-items-center>
          <Tab eventKey="tab-1" title="Login">
            <Login />
          </Tab>
          <Tab eventKey="tab-2" title="Register">
            <Register />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default LoginRegister;
