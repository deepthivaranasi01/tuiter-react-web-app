import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router";

import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";




function ProfileScreen() {

  const { currentUser } = useSelector((state) => state.user);

  const [profile, setProfile] = useState({

    firstName: "",

    lastName: "",

  });

  const dispatch = useDispatch();

  const navigate = useNavigate();




  const save = () => {

    console.log(profile);

    dispatch(updateUserThunk(profile));

  };




  /*useEffect(() => {

    const fetchProfile = async () => {

      const { payload } = await dispatch(profileThunk());

      setProfile(payload);
      console.log("payload"+payload)

    };

    fetchProfile();

  }, [dispatch]);


*/

useEffect(() => {

  async function fetchProfile() {

    const { payload } = await dispatch(profileThunk());
    console.log(payload)

    setProfile(payload);

  }

  fetchProfile();

}, [dispatch]);

 


  return (

    <div>

      <h1>Profile Screen</h1>

      {profile && (

        <div>

          <div>

            <label>First Name</label>

            <input

              type="text"

              value={profile.firstName}

              onChange={(event) => {

                const newProfile = {

                  ...profile,

                  firstName: event.target.value,

                };

                setProfile(newProfile);

              }}

              style={{

                padding: "5px",

                border: "1px solid #ccc",

                borderRadius: "4px",

              }}

            />

          </div>

          <div>

            <label>Last Name</label>

            <input

              type="text"

              value={profile.lastName}

              onChange={(event) => {

                const newProfile = {

                  ...profile,

                  lastName: event.target.value,

                };

                setProfile(newProfile);

                console.log(newProfile);

              }}

              style={{

                padding: "5px",

                border: "1px solid #ccc",

                borderRadius: "4px",

              }}

            />

          </div>

        </div>

      )}

      <button

        onClick={() => {

          dispatch(logoutThunk());

          navigate("/tuiter/login");

        }} className="btn btn-primary mt-2" style= {{marginRight:50}}

      >

        Logout

      </button>

      <button

        onClick={save} className="btn btn-primary mt-2"

      >

        Save

      </button>

    </div>

  );

}




export default ProfileScreen;