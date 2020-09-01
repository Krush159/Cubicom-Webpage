import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Navbar from '../Navbar/Navbar'
import {connect} from 'react-redux'

class PrivateRouting extends Component {

    render() {
        const { isAuth } = this.props
        return isAuth ? (
            <>
                <Route path="/dashboard" component={Navbar}/>
                <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
                
            </>
        ) : (
                <Redirect to="/" />
            )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth
    }
}
export default connect(mapStateToProps)(PrivateRouting)