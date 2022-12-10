import './App.css';
import React from "react";
import HomePage from "./home-component/index.js";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import LoginRegister from "./login-register-component";
import ProfilePage from "./profile-component";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import donorReducer from "./reducers/donor-reducer";
import DonorList from "./donor-list-component";
import NavBar from "./navbar-component";
import DonorDetails from "./donor-details";
import EditUserProfile from './editprofile-component/user-editprofile';
import Search from './search';
import SearchResults from './search/searchresults';
import userprofileReducer from "./reducers/userprofile-reducer";
import editprofileReducer from "./reducers/editprofile-reducer";
import searchReducer from "./reducers/search-reducer";

const store = configureStore(
    {reducer: {
            donorsData: donorReducer,userprofile: userprofileReducer, profile: editprofileReducer, donors: searchReducer}});

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <NavBar/>
              <div className="App">
                  <Routes>
                      <Route path="/" element={<HomePage/>}/>
                      <Route path="/login" element={<LoginRegister/>}/>
                      <Route path="/profile/*" element={<ProfilePage/>}/>
                      <Route path="/home" element={<DonorList/>}/>
                      <Route path="/updateUser" element={<EditUserProfile/>}/>
                      <Route path="/search" element={<Search/>}/>
                      <Route path="/searchresults" element={<SearchResults/>}/>
                      <Route path="/donor/*" element={<DonorDetails/>}/>
                  </Routes>
              </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
