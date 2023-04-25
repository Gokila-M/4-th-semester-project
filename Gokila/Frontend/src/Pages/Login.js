import React, { useEffect, useRef, useState } from "react";
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
  // import { Link, useHistory } from "react-router-dom";
// import Navigation from "../components/Routes/Navigation";
// import Home from "./Home";


const Login = () => {
let history = useHistory(); 
//   const getUsername = localStorage.getItem("usernameData");
//   const getPassword = localStorage.getItem("passwordData");
//   const handleSubmit = () => {    
// }
  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState([]);
  // const [user, setUser] = useState()
  // const handleSubmit = async (e) => {};
  // useEffect(() => {
  //   setUsername("Vishnu");
  //   localStorage.setItem("name", JSON.stringify(username));
  // }, [username]);

  // useEffect(() => {
  //   setPassword("vishnu@123");
  //   localStorage.setItem("password", JSON.stringify(password));
  // }, [password]);
  // useEffect (() => {
  //   username("");
  //   localStorage.clearItem("name", JSON.stringify(username));
  // }, [username]);
//   const Navigation = () => {
//     history.push("/register");
//   };
//   const Navigate = () => {
//     history.push("/");
//   };
  //     render() {
  //       const isLoggedIn = this.state.isLoggedIn;
  //       let button;
  //       if (isLoggedIn) {
  //         button = <LogoutButton onClick={this.handleLogoutClick} />;
  //       } else {
  //         button = <LoginButton onClick={this.handleLoginClick} />;
  //       }
  //       return (
  //         <div>
  //           <Greeting isLoggedIn={isLoggedIn} />
  //           {button}
  //         </div>
  //       );
  //     }
  //   }
  //   function UserGreeting(props) {
  //     return <h1>Welcome back!</h1>;
  //   }
  //   function GuestGreeting(props) {
  //     return <h1>Please sign up.</h1>;
  //   }
  //   function Greeting(props) {
  //     const isLoggedIn = props.isLoggedIn;
  //     if (isLoggedIn) {
  //       return <UserGreeting />;
  //     }
  //     return <GuestGreeting />;
  //   }
  //   function LoginButton(props) {
  //     return (
  //       <button onClick={props.onClick}>
  //         Login
  //       </button>
  //     );
  //   }

  //   function LogoutButton(props) {



  const Navigation = () => {
    // history.push('/register')
    }
    
    const [name, getName] = useState("");
    const [password, getPassword] = useState("");
    const [error, setError] = useState(false);
    
    
    
    const handle = () => {
    const data = JSON.parse(localStorage.getItem("userdata"));
    console.log(data, "data", name, password);
    if (data.username === name && data.password === password) {
    history.push("/");

    } else {
    setError(true);
    }
    
    }


    let style={
    
      backgroundImage:"url('https://w0.peakpx.com/wallpaper/213/447/HD-wallpaper-food-burger-meat-still-life.jpg')",
       // backgroundImage: "url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?cs=srgb&dl=pexels-ella-olsson-1640773.jpg&fm=jpg')",
       height:'93.7vh',
       width: "100%",
       paddingTop:'30px',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       
   }

  return (
    <div style={style}>
            <Row
      style={{
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
                opacity:0.9,
                height: "auto",
                borderRadius:'10px',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
              }}
            >
              <CardBody>
                <Row style={{ justifyContent: "center" }}>
                  <div
                    style={{
                      padding: "10px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Fooide Application Login
                  </div>
                  <hr/>
                  <Row style={{ padding: "20px" }}>
                    <Input
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                      }}
                      placeholder="username or email"
                      type="text"
                      value={name}
                      onChange={(e) => getName(e.target.value)} />
                      {error && name.length <= 3 ? <label style={{paddingTop:'10px', color:'red'}}>Invalid Username</label> : ""}
                  </Row>

                  <Row style={{ padding: "20px" }}>
                    <Input
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                      }}
                      placeholder="password"
                      type="password"
                      value={password}
                      onChange={(e) => getPassword(e.target.value)} />
                      {error && password.length != 2 ? <label  style={{paddingTop:'10px', color:'red'}}>Incorrect Password</label> : ""}
                    
                  </Row>
                  <Row style={{ padding: "10px", justifyContent: "center" }}>
                    <Col
                      style={{
                        color: "grey",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      Are You New User?
                    </Col>
                    <Col
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                      lg={5}
                      onClick={Navigation}
                    >
                     <Link to='/Register'>Create new one</Link> 
                    </Col>{" "}
                  </Row>

                  <Row>
                    <Button
                    
                      style={{
                        backgroundColor: "green",
                        fontWeight:'bold',
                        fontSize: "20px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",

                      }}
                      onClick={() => handle()}
                    >
                      Login
                    </Button>
                  </Row>
                </Row>
              </CardBody>
            </Card>
          </Row>
          </div>

  )
};

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<LoginControl />);

export default Login;
