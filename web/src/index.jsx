import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Input, Menu, Segment, Header, Container, Image } from 'semantic-ui-react'


class Person extends React.Component {   // This is defining new component
  render() {
    return "Hello " + this.props.name;
  }
};

class PersonList extends React.Component {
  render() {
    var nicol = <Person name="Nicol" />;
    var pierre = <Person name="Pierre" />;

    return (
      <ul>
        <li><Button primary>Hello</Button></li>
        <li>{pierre}</li>
      </ul>
    );
  }
}

class Event extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.danceStyle}
        {this.props.location}
        {this.props.date}
        {this.props.time}
        {this.props.description}
      </div>
    )
  }
};

class EventList extends React.Component {
  render() {
    var salsa = <Event
      name='La Parada Salsa'
      danceStyle= 'salsa'
      location='La Parada Bree Street'
      date= '2019-01-10'
      time= '20:00'
      description= 'R50 entrance'/>
    var sokkie = <Event
      name='Opskop Sokkie'
      danceStyle= 'sokkie'
      location='Opskop Stellenbosch'
      date= '2019-01-11'
      time= '21:00'
      description= 'R30 entrance'/>
            
    return (
      <ul>
        <li>{salsa}</li>
        <li>{sokkie}</li>
      </ul>
    )
  }  
}


export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleEventClick = () => console.log('Event menu clicked');
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
            onClick={this.handleEventClick}
          />
          <Menu.Item
            name='Studios'
            active={activeItem === 'studios'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Forum'
            active={activeItem === 'forum'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Partner Search'
            active={activeItem === 'partner-search'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Dance Shops'
            active={activeItem === 'shops'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='2nd hand store'
            active={activeItem === 'second-shop'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='Login'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}



var plist = <PersonList />
const form = <MenuExamplePointing />

ReactDOM.render(form, document.getElementById("root"));

module.hot.accept();
