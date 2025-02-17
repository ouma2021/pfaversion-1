import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Acceuill from './Bienvenue'

import Login from "./Screens/Login";
import LoginAdmin from "./Screens/LoginAdmin";
import LoginEmploye from "./Screens/LoginEmploye";

import AppClient from "../oumaima/AppClient";
import AppAdmin from "../PageAdmin/AppAdmin";
import AppEmploye from "../PageEmployé/AppEmploye";

import Etapee1 from "./Screens/Etape1";

import "./Acceuil.css";


const Acceuil =()=>{
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Acceuill />
        </Route>
        <Route eact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Loginadmin">
          <LoginAdmin />
        </Route>
        <Route exact path="/Signup">
          <Etapee1 />
        </Route>
        <Route exact path="/LoginEmploye">
          <LoginEmploye />
        </Route>
        <Route exact path="/client">
          <AppClient />
        </Route>
        <Route exact path="/admin">
          <AppAdmin />
        </Route>
        <Route exact path="/employe">
          <AppEmploye />
        </Route>
      </BrowserRouter>
    );
}

export default Acceuil