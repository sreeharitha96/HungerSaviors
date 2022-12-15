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
            <img
              src={`/images/${donor.profilePhoto}`}
              className="card-img-top"
              height="250px"
              alt="..."
              style={{ borderRadius: '15px' }}
            />
          </div>
          <div className="card-body">
            <div className="row">
              <h4
                className="col-8"
                style={{ color: '#000000', fontWeight: 700 }}
              >
                {donor.name}
              </h4>
              <h4 className="col-4 large text-end">{donor.rating}</h4>
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
