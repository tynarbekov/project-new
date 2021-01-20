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
      <div style={{display: 'flex'}}>
        <LeftDrawer/>
         <Switch>
           <Route exact path={'/'} component={Home} />
           <Route exact path={'/about'} component={About} />
         </Switch>
      </div>
      <Switch>
        <Container maxWidth="lg">
          <Route exact path={'/auth/logout'} component={LogOut} />
          <Route exact path={'/auth/login'} component={Login} />
        </Container>
      </Switch>
    </Router>
  )
}

export default App
