import React, { useEffect, useRef, useState } from "react";
import { BsWindowSidebar } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Form,
  Input,
  Row,
} from "reactstrap";
// import Home from "./Home";

const Register = () => {
  
  let history = useHistory(); 

  const Navigation = () =>{
  
  // history.push("/register")
  }
  
  const [name,setName] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] =useState(false);
  
  const handle = () => {
  
  console.log(name, password);
  
  const data = {username:name, password:password, mobileNumber:mobileNumber, email:email }
  
  localStorage.setItem("userdata", JSON.stringify(data));
  
  if (name.length<=3, password.length<=3, email.length<=3, mobileNumber.length<=9){
  setError(true)
  
  } else {
    history.push("/login");
  Navigation()
  }
  
  }
  let style={
    
   backgroundImage:"url('https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?w=2000')",
    // backgroundImage: "url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?cs=srgb&dl=pexels-ella-olsson-1640773.jpg&fm=jpg')",
    height:'93.7vh',
    width: "100%",
    paddingTop:'30px',
    backgroundSize: 'stretch',
    backgroundRepeat: 'no-repeat',
    
}

  return (
    <div style={style}>

    <Row
      style={{
        // backgroundColor: "#02BAD6",
        // backgroundImage:"url('https://e0.pxfuel.com/wallpapers/52/830/desktop-wallpaper-food-background-food-food-recipes-food-menu-greek-food.jpg')",
        height: "90vh",
        width:"100%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Card
        style={{
          width: "25%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          opacity:0.8,
          height: "auto",
          borderRadius:'10px',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
        }}
      >
        <CardBody>
          <Row>
            <Row
              style={{
                padding: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
             Foodie Application   Register
            </Row>
            <hr />
            
            <Row style={{ padding: "10px",display:'flex',justifyContent:'space-evenly' }}>
              <Input
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                }}
                placeholder="Username"
                type="text"
                onChange={(e) => setName(e.target.value)} />
                {error && name.length <= 3 ? <label  style={{paddingTop:'10px',color:'red'}}>At least minimum 3 letters</label> : ""}
               
              
            </Row>
            <Row style={{ padding: "10px" }}>
              <Input
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                }}
                placeholder="Email"
                type="text"
               onChange={(e) => setEmail(e.target.value)} />
                {error && email.length <= 3 ? <label  style={{paddingTop:'10px', color:'red'}}>At least minimum 3 letters</label> : ""}
            </Row>
            <Row style={{ padding: "10px" }}>
              <Input
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                }}
                placeholder="Mobile Number"
                type="text"
                onChange={(e) => setMobileNumber(e.target.value)} />
                {error && mobileNumber.length <= 3 ? <label style={{paddingTop:'10px', color:'red'}}>At least minimum 3 letters</label> : ""}
            </Row>
            <Row style={{ padding: "10px" }}>
              <Input
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                }}
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)} />
                {error && password.length <= 3 ? <label style={{paddingTop:'10px', color:'red'}}>At least minimum 3 letters</label> : ""}
            </Row>
            <Row style={{ padding: "10px", justifyContent: "center" }}>
              <Col
                style={{
                  color: "grey",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Are you existing user?
              </Col>
              <Col
                style={{
                  color: "blue",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                lg={3}
              >
                <Link to="/login">Login</Link>
              </Col>
            </Row>
            <Row>
              <Button
                style={{
                  backgroundColor: "green",
                  fontSize: "20px",
                  fontWeight:'bold',
                  boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                }}
                onClick={() => handle()} 
              >
                Register
              </Button>
            </Row>
          
          </Row>  
        </CardBody>
      </Card>
    </Row>
    </div>
  );
};
export default Register;
