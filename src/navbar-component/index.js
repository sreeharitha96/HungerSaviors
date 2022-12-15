import { Link } from 'react-router-dom';
import Search from '../search';
import './index.css';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../users/user-thunks';

function NavBar({ userState }) {
  const {currentUser} = useSelector((state) => state.users)

  const dispatch = useDispatch();
  const handleLogoutBtn = () => {
    dispatch(logoutThunk());
  };
  
  return (
    <>
      {!userState ? (
        <div className="bg-image ws-background ">
          <div className="mask ws-overlap">
            <div className="h-100">
              <div style={{ height: '100%' }}>
                <div className="row ws-nav-bar transparent w-100 p-0 m-0">
                  <div className="col-8">
                    <nav className="navbar navbar-expand-md navbar-dark">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div
                        className="collapse navbar-collapse text-black"
                        id="navbarTogglerDemo01"
                      >
                        <Link to="/" className="navbar-brand" href="#">
                          <h1
                            className="text-black"
                            style={{
                              fontWeight: '700',
                              fontFamily: 'Pacifico',
                            }}
                          >
                            Hunger Saviors
                          </h1>
                        </Link>
                        {/* <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                        <li className="nav-item active">
                          <a className="nav-link text-black" href="#">
                            Home <span className="sr-only">(current)</span>
                          </a>
                        </li>
                      </ul> */}

                        {/* <form className="form-inline my-2 my-md-0"> */}
                        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                        {/* </form> */}
                      </div>
                    </nav>
                  </div>
                  <div className="col-4 align-self-center float-end">
                    {
                    !currentUser ?
                      <Link to="/login">
                        <Button
                          type="primary"
                          shape="round"
                          // icon={<DownloadOutlined />}
                          className="float-end me-3"
                          size={'large'}
                        >
                          Login / Sign Up
                        </Button>
                      </Link> :
                      <Link to="/">
                        <Button
                          type="primary"
                          shape="round"
                          // icon={<DownloadOutlined />}
                          className="float-end me-3"
                          size={'large'}
                          onClick={() => handleLogoutBtn()}
                        >
                          Logout
                        </Button>
                      </Link>
                    }
                    {
                      currentUser && 
                      <Link to="/profile">
                      <Button
                        type="primary"
                        shape="round"
                        // icon={<DownloadOutlined />}
                        className="float-end me-3"
                        size={'large'}
                      >
                        Profile
                      </Button>
                    </Link>
                    }
                    
                  </div>
                </div>

                <div
                  className="row "
                  style={{ height: '80%', paddingLeft: '40px' }}
                >
                  <div className="col-6 ">
                    <div className="d-flex text-black flex-column justify-content-center align-items-left h-100">
                      <h1
                        style={{
                          fontSize: '50px',
                          fontWeight: 700,
                          width: '75%',
                        }}
                      >
                        Hungry? You're in the right place
                      </h1>
                      <p style={{ width: '50%', fontSize: '20px' }}>
                        Web Squads are changing the world by building this app.<br/>
                        Edibles left? Go on and make a change by donating!<br/>
                        Need them? We are here to find someone out there to help you!
                      </p>
                      <Link to="/login">
                        <Button
                          type="primary"
                          shape="round"
                          // icon={<DownloadOutlined />}
                          className="mt-3"
                          size={'large'}
                        >
                          Login / Sign Up
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div></div>
                  </div>
                </div>

                {/* <div className="d-flex text-black flex-column justify-content-center align-items-center h-100">
                <h1 style={{ fontSize: '50px', fontWeight: 700 }}>
                  Changing Lives
                </h1>
                <p style={{ width: '50%', fontSize: '20px' }}>
                  Web Squads are changing the world by building this shitty app.
                </p>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="row ws-nav-bar transparent w-100 p-0 m-0">
            <div className="col-8">
              <nav className="navbar navbar-expand-md navbar-dark">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse text-black"
                  id="navbarTogglerDemo01"
                >
                  <Link to="/" className="navbar-brand" href="#">
                    <h1
                      className="text-black"
                      style={{
                        fontWeight: '700',
                        fontFamily: 'Pacifico',
                      }}
                    >
                      Hunger Saviors
                    </h1>
                  </Link>
                  {/* <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                        <li className="nav-item active">
                          <a className="nav-link text-black" href="#">
                            Home <span className="sr-only">(current)</span>
                          </a>
                        </li>
                      </ul> */}

                  {/* <form className="form-inline my-2 my-md-0"> */}
                  {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
                  {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                  {/* </form> */}
                </div>
              </nav>
            </div>
            <div className="col-4 align-self-center float-end">
            {
                    !currentUser ?
                      <Link to="/login">
                        <Button
                          type="primary"
                          shape="round"
                          // icon={<DownloadOutlined />}
                          className="float-end me-3"
                          size={'large'}
                        >
                          Login / Sign Up
                        </Button>
                      </Link> :
                      <Link to="/">
                        <Button
                          type="primary"
                          shape="round"
                          // icon={<DownloadOutlined />}
                          className="float-end me-3"
                          size={'large'}
                          onClick={() => handleLogoutBtn()}
                        >
                          Logout
                        </Button>
                      </Link>
                    }
                    {
                      currentUser && 
                      <Link to="/profile">
                      <Button
                        type="primary"
                        shape="round"
                        // icon={<DownloadOutlined />}
                        className="float-end me-3"
                        size={'large'}
                      >
                        Profile
                      </Button>
                    </Link>
                    }
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
