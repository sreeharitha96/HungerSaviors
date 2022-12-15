import React from 'react';
import { Steps } from 'antd';

function LandingFind() {
  return (
    <div
      className=" d-flex justify-content-center align-self-center"
      style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}
    >
      <div className="m-5">
        <Steps
          direction="vertical"
          current={2}
          items={[
            {
              title: 'Start-off',
              description: 'Register as a customer',
            },
            {
              title: 'Progress',
              description: 'Find the store of your choice',
            },
            {
              title: 'Finished',
              description: 'Order and take out',
            },
          ]}
        />
      </div>
    </div>
  );
}
export default LandingFind;
