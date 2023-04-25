import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { NavLink } from "reactstrap";
export default function Nav(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  {/* <a class="navbar-brand" href="#">FMS </a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      {/* <li class="nav-item active">
        <a class="nav-link" href="#/bank">Bank <span class="sr-only"></span></a>
      </li> */}
      <li class="nav-item" >
        <NavLink class="nav-link" style={{ color:'white', fontWeight:'bold',fontSize:'24px',paddingLeft:'50px'}} href="/">Foodie Application</NavLink>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={{ color:'skyblue', fontWeight:'bold',fontSize:'20px',paddingLeft:'1170px'}} href="/register">Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={{ color:'skyblue', fontWeight:'bold',fontSize:'20px',paddingLeft:'20px'}} href="/login">Login Screen</a>
      </li>  
      <li class="nav-item" >
        <a class="nav-link" style={{ color:'yellow', fontWeight:'bold',fontSize:'20px',paddingLeft:'20px'}} href="/">LogOut</a>
      </li>     
      {/* <li class="nav-item">
        <a class="nav-link " href="#/alldata">User Data's</a>
      </li> */}
    </ul>
  </div>
</nav>
        </>

    )
}
