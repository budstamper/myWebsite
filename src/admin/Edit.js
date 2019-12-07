import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

// const headerAxios = axios.create();

// headerAxios.interceptors.request.use(config => {
//   const token = localStorage.getItem("token");
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        _id: "",
        post: {
            antiques_body:"",
            furniture_body:"",
            mattresses_body:"",
            furnitureP_title:"",
            furnitureP_body:"",
            mattress_title:"",
            mattress_body:""
        }
      }
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit=e=>{
      e.preventDefault()
      console.log('loggin in...')
      const post = {
post:{

}
      }
      this.props.puts(post)
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <div className="editCont">
        <form onSubmit={this.handleLoginSubmit}>
          <input
            className="inputs2"
            onChange={this.handleChange}
            type="text"
            name="logUsername"
            value={this.state.logUsername}
            placeholder="username"
          />
          <input
            className="inputs2"
            onChange={this.handleChange}
            type="password"
            name="logPassword"
            value={this.state.logPassword}
            placeholder="password"
          />
          <br />{" "}
          <button className="homeButtons" id="logInBttn">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Admin);
