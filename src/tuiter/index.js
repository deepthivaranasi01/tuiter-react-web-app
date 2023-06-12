import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import BookmarksScreen from "./bookmarks-screen";
import WhoToFollowList
  from "./who-to-follow-list";
import "./index.css"
import Explore from "./explore-screen/";
import tuitsReducer from "./reducers/tuits-reducer";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import authReducer from "./reducers/auth-reducer";

const store = configureStore(
  {reducer: {who: whoReducer,  tuits: tuitsReducer, user : authReducer}});

function Tuiter() {
 return (
  <Provider store={store}>

<div>
  <Nav />
  <div className="row">
    
    <div className="col-xxl-2 col-xl-3 col-lg-2 col-md-2 col-sm-2">
      <NavigationSidebar/>
    </div>

    <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-10 col-sm-10">
   <Routes>
     <Route path="/home" element={<HomeScreen/>} />
     <Route path="/explore" element={<Explore/>} />
     <Route path="/bookmarks" element={<BookmarksScreen/>} />
     <Route path="/login"    element={<LoginScreen    />} />
     <Route path="/profile" element={<ProfileScreen />} />
   </Routes>
 </div>
    
    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 ">
      <WhoToFollowList/>
    </div>
  </div>
  </div>
  </Provider>

 );
}
export default Tuiter;



