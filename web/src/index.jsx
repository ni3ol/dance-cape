import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Input, Menu, Segment, Header, Container, Image } from 'semantic-ui-react'
import Login from './login.jsx'
import EventList from './eventList.jsx'
import StudioList from './studioList.jsx'

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'events' }

  handleMenuItemClick = (activeItem) => this.setState({activeItem})

  getPage = (activeItem) => {
    switch(activeItem) {
      case 'events': return <EventList/>;
      case 'studios': return <StudioList/>;
      case 'login': return <Login/>;
      default: return <p>Unknown Page</p>;
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Container textAlign='center'>
          <Header as='h1'>DanceCape</Header>
        </Container>
        <Menu pointing>
          <Menu.Item
            name='Events'
            active={activeItem === 'events'}
            onClick={() => this.handleMenuItemClick('events')}
          />
          <Menu.Item
            name='Studios'
            active={activeItem === 'studios'}
            onClick={() => this.handleMenuItemClick('studios')}
          />
        <Menu.Item
            name='Login'
            active={activeItem === 'login'}
            onClick={() => this.handleMenuItemClick('login')}
          />
        </Menu>
        <div>
          {this.getPage(activeItem)}
        </div>
      </div>
    )
  }
}

const form = <MenuExamplePointing />
ReactDOM.render(form, document.getElementById("root")); 
module.hot.accept();
