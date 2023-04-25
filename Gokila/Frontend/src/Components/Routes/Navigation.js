import React from "react";
import "../../index.css";
// import Header from "./components/Header/Header";
// import SideBar from "../../components/sidebarNav/SideBar";
// import Footer from "./components/Footer/Footer";
import { Container, Row, Col } from "reactstrap";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
// import { Router } from "react-router-dom/cjs/react-router-dom.min";


export default function Navigation() {
return (

<Router><Switch>
<Route exact path="/" component={Home}/>
<Route  path="/login" component={Login} />
<Route  path="/register" component={Register} />
</Switch>
</Router>


);
}