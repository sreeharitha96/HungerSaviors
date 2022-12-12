import {Link} from "react-router-dom";
import Search from "../search";

function NavBar() {
    return (
        <>
            <div className="row bg-dark ws-nav-bar w-100 p-0 m-0">
                <div className="col-8">
                    <nav className="navbar navbar-expand-md navbar-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <Link to="/" className="navbar-brand" href="#">
                                <img className="ws-logo" src={"/images/logo.png"}/>
                                Hunger Saviors
                            </Link>
                            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Disabled</a>
                                </li>
                                <li>
                                    <Search/>
                                </li>
                            </ul>

                            {/* <form class="form-inline my-2 my-md-0"> */}
                            {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
                            {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                            {/* </form> */}
                        </div>
                    </nav>
                </div>
                <div className="col-4 align-self-center float-end">
                    <Link to="/login"><button className="float-end me-3">Login/Register</button></Link>
                </div>

            </div>
        </>
    )
}

export default NavBar;