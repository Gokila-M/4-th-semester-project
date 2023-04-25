import React from "react";
import "../../index.css";
// import Header from "./components/Header/Header";
// import SideBar from "../../components/sidebarNav/SideBar";
// import Footer from "./components/Footer/Footer";
import { Container, Row, Col } from "reactstrap";
import Navigation from "../Routes/Navigation";
import Nav from "../Header/nav";
// import Home from ".../pages/Home";

export default function App() {
return (
<Container fluid>
<Row >
    <Nav/>
<Col lg={'12'} style={{ padding: "0px" }}>
<Navigation />
</Col>
</Row>
</Container>
);
}