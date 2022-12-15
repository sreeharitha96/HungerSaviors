import React from 'react';
import { Steps } from 'antd';

function LandingDonate() {
  return (
    <div
      className=" d-flex justify-content-center align-self-center"
      style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}
    >
      <div className="p-5">
        <Steps
          direction="vertical"
          current={2}
          items={[
            {
              title: 'Start-off',
              description: 'Register as a donor, wait for approval',
            },
            {
              title: 'In Progress',
              description: 'Update your inventory everyday',
            },
            {
              title: 'Finished',
              description: 'Donate to make a change',
            },
          ]}
        />
      </div>
    </div>
  );
}
export default LandingDonate;
