import "./index.css";
import NavBar from "../navbar-component/index.js";
import LandingDonate from "./LandingDonate.js";
import LandingFind from "./LandingFind.js";

function LandingPage() {
    return (
        <>
            <div className="bg-image ws-background">
                <div className="mask ws-overlap align-self-center" style={{}}>
                    <NavBar/>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <h1 className="text-white mb-0"><b>CHANGING LIVES</b><br/>TAKES A COMMUNITY</h1>
                    </div>
                </div>
            </div>

            <div className="row p-0 m-0">
                <div className="col-6">
                    <LandingDonate/>
                </div>
                <div className="col-6">
                    <LandingFind/>
                </div>
            </div>
        </>

    )
}
export default LandingPage;