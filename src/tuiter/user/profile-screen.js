import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
  from "../services/auth-thunks";


function ProfileScreen() {
 const { currentUser } = useSelector((state) => state.user);
 console.log("currentuser"+currentUser)
 const [profile, setProfile] = useState({firstName: "",

 lastName: "",});
 console.log("profile"+profile)
 console.log("profile"+setProfile)
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const save = () => { dispatch(updateUserThunk(profile)); };

 const handleLogout = async () => {
  try {
    await dispatch(logoutThunk());
    navigate("/tuiter/login");
  } catch (e) {
    alert(e);
  }
 };

 useEffect(() => {

    const fetchProfile = async () => {

      const { payload } = await dispatch(profileThunk());
      console.log("payload"+payload)

      setProfile(payload);

    };

    fetchProfile();

  }, [dispatch]);
 console.log("ssss"+profile)
 return (   <div>
    <h1>Profile Screen</h1>
    {profile && (<div>
      <div>
       <label>First Name</label>
       <input type="text" value={profile.firstName}
        onChange={(event) => {
         const newProfile = {
          ...profile, firstName: event.target.value,
         };
         setProfile(newProfile);
        }}/>
      </div>
      <div>
       <label>Last Name</label>
       <input type="text" value={profile.lastName}
        onChange={(event) => {
         const newProfile = {
          ...profile, lastName: event.target.value,
         };
         setProfile(newProfile);
        }}/>
      </div></div>
    )}
    <div>
    <button 
     onClick={handleLogout} className="btn btn-primary mt-2" style = {{marginRight:50}}>Logout</button> 
    <button onClick={save} className="btn btn-primary mt-2" > Save  </button>
    </div>
   </div>
 )
}
export default ProfileScreen;
