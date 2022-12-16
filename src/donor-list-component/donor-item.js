import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { useSelector } from 'react-redux';

const DonorItem = ({ donor }) => {
  // console.log(donor._id)
  const linkTo = useSelector((state) => !state.users.currentUser)
    ? '/login'
    : `/donor/${donor.userName}`;
  console.log(linkTo);
  return (
    <Link to={linkTo} className="text-decoration-none">
      <div className="pb-3">
        <div
          className="card text-start border-0"
          style={{ borderRadius: '15px' }}
        >
          <div className="m-3" style={{ borderRadius: '15px' }}>
            {
                (donor.image) &&
                <img className="w-100 rounded-2" src={`/images/${donor.image}`} alt="landing background"/>
            }
            {
              <img className="w-100 rounded-2" src="/images/background.jfif" alt="landing background"/>
            }
          </div>
          <div className="card-body">
            <div className="row">
              
              <Link to={`/publicdonor/${donor.userName}`} className="text-decoration-none col-8">
              <h4
                
                style={{ color: '#000000', fontWeight: 700 }}
              >
                {donor.name}
              </h4>
              </Link>
              <h4 className="col-4 small text-end">{donor.rating}</h4>
            </div>
            <h5 className="small">{donor.location}</h5>
            <div className="pb-2" style={{ fontSize: '15px' }}>
              {' '}
              <span
                style={{ color: '#F26419', fontWeight: 600, fontSize: '15px' }}
              >
                Open:{' '}
              </span>
              {donor.storeTimings}
            </div>
            <div>
              <p className="text-black">
                {donor.description}
              </p>
            </div>

            <div className="w-100">
              <Button
                type="primary"
                size={'large'}
                style={{
                  height: '50px',
                  width: '100%',
                  fontSize: '16px',
                  fontWeight: 700,
                }}
              >
                Browse Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DonorItem;
