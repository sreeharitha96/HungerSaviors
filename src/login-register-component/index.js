import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Login from '../login-component';
import Register from '../register-component';

function LoginRegister() {
  const container1 = {
    height: '100%',
    width: '50%',
    alignItems: 'center',
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

  return (
    <div className="container" style={container1} fluid>
      <div className="row"style={{ height: '100%' }}>
        <Tabs justify variant="pills" defaultActiveKey="tab-1">
            <Tab eventKey="tab-1" title="Login">
                <Login/>
            </Tab>
            <Tab eventKey="tab-2" title="Register">
                <Register/>
            </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default LoginRegister;
