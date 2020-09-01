import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from '../Login/Login'
import PrivateRouting from './PrivateRouting'

export default function Routing() {
    return (
        <div>
            
            <Switch>
                <Route path="/dashboard" render={(props) => <PrivateRouting {...props}/>}/>
                <Route path="/" exact render={(props)=> <Login {...props}/>}/>
            </Switch>
        </div>
    )
}
