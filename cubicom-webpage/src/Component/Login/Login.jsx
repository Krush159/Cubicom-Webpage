import React, { Component } from 'react'
import styles from './Login.module.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginSuccess, loginFailure, loginRequest } from '../../Redux/Actions'
import axios from 'axios'
import qs from 'qs'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        let { username, password } = this.state
        let userInfo = { username, password }
        console.log(userInfo)
        this.props.loginSuccess(userInfo)
        // const url = "https://api-stage.kyte.app/network-app/oauth/token"
        // const options = {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
        //     data: qs.stringify(userInfo),
        //     url,
        //   };


        // return await axios(options)
        //     .then(res => this.props.loginSuccess(res))
        //     .catch(err => this.props.loginFailure(err))
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const { isAuth } = this.props
        console.log(isAuth)
        return (
            <div>
                {isAuth ? (
                    <Redirect to="/dashboard" />
                ) : (
                        <div className={styles.container}>
                            <div>
                                <img className={styles.image_container} src="../../../Resources/CCR1000BT_IMG3.png" alt="login page" />
                            </div>
                            <div className={styles.form_container}>
                                <form className={styles.login_form} onSubmit={this.handleSubmit}>
                                    <div className={styles.login_heading}>
                                        <h2>Welcome to  <span>
                                            <img className={styles.logo} src="../../../Resources/logo.svg" alt="cubicum logo" />
                                        </span></h2>

                                    </div>
                                    <h4 className={styles.quote}>We make easy for everyone to manage<br />logistics operations.</h4>
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        className={styles.username_input}
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                        placeholder="Enter Username" />

                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className={styles.password_input}
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        placeholder="Enter Password" />

                                    <div className={styles.form_bottom}>
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <div className={styles.form_links}>
                                            <small>Remember me</small>
                                            <small>Forgot password?</small>
                                        </div>
                                    </div>
                                    <button type="submit" className={styles.login_button}>Login</button>
                                </form>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: () => dispatch(loginRequest()),
        loginSuccess: (data) => dispatch(loginSuccess(data)),
        loginFailure: (error) => dispatch(loginFailure(error))
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
        loggingIn: state.loggingIn
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)