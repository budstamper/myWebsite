import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"
import swal from 'sweetalert';
// import ProtectedRoute from './ProtectedRoute'

const headerAxios = axios.create()

headerAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            logUsername: "",
            logPassword: "",
            user: {
              username: "",
              _id: ""
            },
            authErr: {
              status: '',
              err: '',
            },
            isAuthenticated: false,
          }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLoginChange = e => {
        console.log(e.target.value, this.state)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignUpSubmit = e => {
        e.preventDefault()
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            userImage: this.state.selectedGender
        }
        this.props.signUp(newUser)
    }

    handleLoginSubmit = e => {
        e.preventDefault()
        console.log('loggin in...')
        const user = {
            username: this.state.logUsername,
            password: this.state.logPassword
        }
        this.props.login(user)
    }


    logout = (updates, id) => {
        headerAxios.put(`/api/score/${id}`, updates).then(res =>{
          console.log("user has been logged out", res)
          localStorage.removeItem("token")
          localStorage.removeItem('user')
          this.setState({
            user: {
              username: "",
              userImage: "",
              bank: 0,
              incomePerClick: 1,
              upgrades: [],
              _id: ""
            },
            isAuthenticated: false,
          })
        })
      }
      
  verify = () => {
    headerAxios.get('/api/profile')
        .then(res => {
            const { user } = res.data
            this.authenticate(user)
        })
        .catch(err => {
            this.authError("verify", err.status)
        })
  }

    render() {
        const { isAuthenticated } = this.state
        return (
            <div className="adminCont">
                                              <form onSubmit={this.handleLoginSubmit}>
                    <input className="inputs" onChange={this.handleLoginChange} type="text" name="logUsername" value={this.state.logUsername} placeholder="username" />
                    <input className="inputs" onChange={this.handleLoginChange} type="password" name="logPassword" value={this.state.logPassword} placeholder="password" />
                   <br/> <button className="homeButtons" id="logInBttn">Log In</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Admin)