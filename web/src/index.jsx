import React from 'react'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import DanceMenu from './component/Menu.jsx'
import { MainHeader } from './component/Header.jsx'
import Home from './views/home.jsx'
import Studios from './views/studios.jsx'
import Events from './views/events.jsx'
import LoginView from './views/login.jsx'
import SignupView from './views/signup.jsx'
import { Container, Header} from 'semantic-ui-react'
import { Switch, BrowserRouter, Route, browserHistory, indexRoute, Link } from 'react-router-dom';

class App extends React.Component{
    render() {
      console.log(browserHistory)
      const pierre = 4
      return (
        <BrowserRouter>
          <div>
            <MainHeader/>
            <DanceMenu/>
            <Switch>
              <Route path="/studios" component={() => <Studios pierre={pierre}/>}/>
              <Route path="/events" component={() => <Events/>}/>
              <Route path="/login" component={() => <LoginView/>}/>
              <Route path="/signup" component={() => <SignupView/>}/>
              <Route path="/" component={() => <Home/>}/>
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));

module.hot.accept();
