import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUp from './user/SignUp'
import SignIn from './user/SignIn'
import Home from './Core/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/signin" exact component={SignIn} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
