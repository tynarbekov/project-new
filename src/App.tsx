import React, { Fragment } from 'react'
import LeftDrawer from "./component/LeftDrawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./container/auth/login";
import Home from './container/home';
import About from './container/about';
import LogOut from './container/auth/logOut';
import Container from '@material-ui/core/Container';



function App() {
  return (
<Router>
      <Switch>
        <Route path={'/auth'}>
          <Container maxWidth="lg">
            <Route exact path={'/auth/logout'} component={LogOut}/>
            <Route exact path={'/auth/login'} component={Login}/>
          </Container>
        </Route>
        <Route path={'/'}>
          <div style={{ display: 'flex' }}>
            <LeftDrawer/>
            <Switch>
              <Route exact path={'/home'} component={Home}/>
              <Route exact path={'/about'} component={About}/>
            </Switch>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
