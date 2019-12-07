import React, {Component} from "react"
import { Switch, Route } from "react-router-dom"
import ProtectedRoute from './ProtectedRoute'
import Sleep from "./home/Sleep"
import Distro from "./home/Distro"
import Home from "./home/Home"
import Admin from "./admin/Admin"
import Edit from "./admin/Edit"
import './App.css';
import axios from "axios"
import swal from 'sweetalert';

const headerAxios = axios.create()

headerAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export default class App extends Component {
  constructor() {
      super()
      this.state = {
        user: {
          username: "",
          _id: "",
          post:[]
        },
        authErr: {
          status: '',
          err: '',
        },
        isAuthenticated: false,
      }
    }

  getData = () => {
    headerAxios.get(`/all/${this.state.user._id}`).then(res => {
        this.setState({
          user: res.data,
        })
    })
  }

  putData = (updates) => {
    headerAxios.put(`/api/all/${this.state.user.id}`, updates).then(res =>{
      console.log("user has been updated", res)
  })
  }

  login = userInfo => {
    axios.post("/auth/login", userInfo).then(res => {
      const {user, token} = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      this.authenticate(user)
    }).catch(err => {
      this.authErr(err.response.status, err.response.data.err)
      swal(this.state.authErr.err)
    })
  }

  authenticate = user => {
    this.setState(prevState => ({
      user: {
          ...user
      },
      isAuthenticated: true
    }), () => {
      this.getData()
    })
  }

  logout = (updates, id) => {
    headerAxios.put(`/api/all/${id}`, updates).then(res => {
      console.log("user has been logged out", res);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.setState({
        user: {
          username: "",
          bank: 0,
          incomePerClick: 1,
          post: [],
          _id: ""
        },
        isAuthenticated: false
      });
    });
  };

  authErr = (status, err) => {
    this.setState(prevstate=>({
      ...prevstate,
      authErr: {
        status: status,
        err: err
      }
    }))
  }

  verify = () => {
    headerAxios
      .get("/api/profile")
      .then(res => {
        const { user } = res.data;
        this.authenticate(user);
      })
      .catch(err => {
        this.authError("verify", err.status);
      });
  };

  render() {
    const { isAuthenticated } = this.state
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => 
                  <Home/>
          }/>
          <Route exact path="/sleep" render={() => 
                  <Sleep/>
          }/>
          <Route exact path="/distributor" render={() => 
                  <Distro/>
          }/>

            <Route exact path="/admin" render={props => !isAuthenticated
    ? 
          <Admin
          {...this.props}
          signUp={this.signUp}
          login={this.login} />
    :
          <Edit
          {...this.props}
          user={this.state.user}
          putData={this.putData}
          update={this.postScore}/>
  }/>

            <ProtectedRoute 
      path="/editor" 
      redirectTo="/"
      isAuthenticated={ isAuthenticated } 
      render={() => 
        <Edit/>}
      />
        </Switch>
      </React.Fragment>
    );
  }
}