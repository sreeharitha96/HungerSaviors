import "./index.css";
import NavBar from "../navbar-component/index.js";
import LandingDonate from "./LandingDonate.js";
import LandingFind from "./LandingFind.js";
import React from 'react';
import {Link} from "react-router-dom";
import DonorList from "../donor-list-component";
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';

function HomePage() {
    return (
        <>
            <div className="bg-image ws-background">
                <div className="mask ws-overlap align-self-center" style={{}}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <h1 className="text-white mb-0"><b>CHANGING LIVES</b><br/>TAKES A COMMUNITY</h1>
                    </div>
                </div>
            </div>

            <div className="row p-0 m-0">
                <div className="p-5">
                    {/*<FontAwesomeIcon icon="fa-solid fa-handshake-simple" />*/}
                    icon for holding hands<br/>
                    Join Us to start making a difference! <Link to="/login">login/register</Link>
                </div>
                <div className="col-6">
                    <div className="ws-landing-card d-inline-block">
                        <LandingDonate/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="ws-landing-card d-inline-block">
                        <LandingFind/>
                    </div>
                </div>
            </div>
            <DonorList/>
        </>

    )
}
export default HomePage;