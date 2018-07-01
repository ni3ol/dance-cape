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

// const FormExampleForm = () => (
//   <Container>
//   <Form>
//     <Form.Field>
//       <label>First Name</label>
//       <input placeholder='First Name' />
//     </Form.Field>
//     <Form.Field>
//       <label>Last Name</label>
//       <input placeholder='Last Name' />
//     </Form.Field>
//     <Form.Field>
//       <Checkbox label='I agree to the Terms and Conditions' />
//     </Form.Field>
//     <Button type='submit'>Submit</Button>
//   </Form>
// </Container>
// )

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Container textAlign='center'>
          <Header as='h1'>DanceCape</Header>
        </Container>
        <Image centered src='https://static1.squarespace.com/static/5317e8cbe4b0ebfb9ed2542c/t/5756003b4c2f85409be15e8d/1465253948865/header-19.jpg?format=2500w' />
        <Menu pointing>
          <Menu.Item
            name='Events'
            active={activeItem === 'events'}
            onClick={this.handleItemClick}
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
            <Menu.Item
              name='Logout'
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
