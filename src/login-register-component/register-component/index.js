// import React, {useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {registerThunk} from "../../users/user-thunks.js"
// import { Button } from 'react-bootstrap';


// function Register() {

//   const [userName, setName] = useState('admin')
//   const [email, setEmail] = useState('admin@admin.com')
//     const [password, setPassword] = useState('admin@123')
//     const [validatePassword, setValidatePassword] = useState('admin@123')
//     const [error, setError] = useState(null)
//     const {currentUser} = useSelector((state) => state.users)
//     const dispatch = useDispatch()
//     const handleRegisterBtn = () => {
//         if (password !== validatePassword) {
//             setError('Passwords must match')
//             return
//         }
//         setError(null)
//         const newUser = {userName, email, password}
//         dispatch(registerThunk(newUser))
//     }

//   const container1 = {
//     height: '100%',
//   };
//   const firstHalf = {
//     backgroundColor: '#F5F3F0',
//     height: '100%',
//   };
//   const secondHalf = {
//     backgroundColor: '#2A4E49',
//     height: '100%',
//     display: 'flex',
//   };

//   const centerDiv = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   };

//   const headerStyle = {
//     color: '#ffffff',
//   };

//   const forms = {
//     marginTop: '30px',
//     backgroundColor: '#2A4E49',
//     color: '#ffffff',
//     outline: 'none',
//   };

//   const submitButton = {
//     marginTop: '10px',
//     backgroundColor: '#EA7035',
//     border: 'none',
//     padding: '10px 40px',
//   };

//   return (
//     <div className="container" style={container1} fluid>
//       <div className="row"style={{ height: '100%' }}>
//         <div className="col"style={firstHalf}></div>
//         <div className="col"style={secondHalf}>
//           <div className="container" style={centerDiv}>
//             <div className="row">
//               <h1 style={headerStyle}>Register</h1>
//               {/* <p style={headerStyle}> I'm a professional</p> */}
//               <div className="container">
//                 {
//                   error &&
//                   <div className="alert alert-danger">
//                       {error}
//                   </div>
//                 }
//                 <form>
//                     <div>
//                         <input type="radio" value="donor" name="user-type"/>Donor
//                         <input type="radio" value="customer" name="user-type"/>Customer
//                     </div>
//                     <div className='form-group' style={forms}>
//                         <label htmlFor="register-name">Name</label>
//                         <input type="text" className="forms" placeholder="Enter name" id="register-name" onChange={(e) => setName(e.target.value)}/> 
//                     </div>
//                     <div className='form-group' style={forms}>
//                         <label htmlFor="register-email">Email address</label>
//                         <input type="email" className="forms" placeholder="Enter email" id="register-email" onChange={(e) => setEmail(e.target.value)}/> 
//                     </div>
//                     <div className="form-group" style={forms}>
//                         <label htmlFor="register-password">Password</label>
//                         <input type="password" className="forms" placeholder="Password" id="register-password" onChange={(e) => setPassword(e.target.value)}/>
//                     </div>
//                     <div className="form-group" style={forms}>
//                         <label htmlFor="register-password-re-enter">Re-enter Password</label>
//                         <input type="password" className="forms" placeholder="Password" id="register-password-re-enter" onChange={(e) => setValidatePassword(e.target.value)}/>
//                     </div>
//                     <Button style={submitButton} onClick={handleRegisterBtn}>Register</Button>
//                 </form>

//                 {
//                   currentUser &&
//                   <h2>Welcome {currentUser.userName}</h2>
//                 }
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React from 'react';
import RegisterCustomer from './register-customer.js';
import RegisterDonor from './register-donor.js/index.js';
import { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

function Register() {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  
  return (
    <>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Customer
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Donor
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}><RegisterCustomer/></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}><RegisterDonor/></MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}

export default Register;