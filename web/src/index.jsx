import React from 'react'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import DanceMenu from 'web/component/Menu.jsx'
import { MainHeader } from 'web/component/Header.jsx'
import Home from 'web/views/home.jsx'
import StudiosView from 'web/views/studios.jsx'
import EventsView from 'web/events/views/eventsView.jsx'
import CreateEventView from 'web/events/views/createEventView.jsx'
import LoginView from 'web/views/login.jsx'
import SignupView from 'web/views/signup.jsx'
import PartnerSearchView from 'web/views/partnersearch.jsx'
import ShopsView from 'web/views/shops.jsx'
import ForumView from 'web/views/forum.jsx'
import MarketplaceView from 'web/views/marketplace.jsx'
import { Container, Header} from 'semantic-ui-react'
import { Switch, BrowserRouter, Route, browserHistory, indexRoute, Link } from 'react-router-dom';

class App extends React.Component{
    render() {
      console.log(browserHistory)
      return (
        <BrowserRouter>
          <div>
            <MainHeader/>
            <DanceMenu/>
            <Switch>
              <Route path="/login" component={() => <LoginView/>}/>
              <Route path="/signup" component={() => <SignupView/>}/>
              <Route path="/create-event" component={() => <CreateEventView/>}/>
              <Route path="/studios" component={() => <StudiosView/>}/>
              <Route path="/events" component={() => <EventsView/>}/>
              <Route path="/partner-search" component={() => <PartnerSearchView/>}/>
              <Route path="/shops" component={() => <ShopsView/>}/>
              <Route path="/marketplace" component={() => <MarketplaceView/>}/>
              <Route path="/forum" component={() => <ForumView/>}/>
              <Route path="/" component={() => <Home/>}/>
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));

module.hot.accept();
