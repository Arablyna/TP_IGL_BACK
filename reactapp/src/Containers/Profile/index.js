import React, { useEffect } from "react";
import {IoCloseOutline} from "react-icons/io5";
import TextField from '@mui/material/TextField';
import SelectChoice from "../../Components/selectChoice.jsx";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentUser } from "../../Redux/slices/currentUserSlice";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {

    const user = useSelector((state) => state.user.value);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = () => {
        // setUser({});
        dispatch(setCurrentUser({}));
        navigate("/");
        // document.getElementById("hero").hidden = false;
    }
    return (
        <div className="Overlay">
            <div className="annonceDetails infosCard" onClick={(e) => {e.stopPropagation()}}>
                <div className="Profile">
                    <div className="section">
                        <h1>Profile Page</h1>
                    </div>
                </div>
                <div className="infos">
                    <img src={user.photo} alt="Profile picture"/>
                    <h1>{user.nom + user.prenom}</h1>
                    <p>{user.email}</p>
                    <button className="send" onClick={() => handleSignOut()}>Déconnecter</button>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage;