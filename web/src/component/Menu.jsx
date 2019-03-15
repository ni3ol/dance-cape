import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Input, Menu } from 'semantic-ui-react'
import { BrowserRouter, Route, browserHistory, indexRoute, Link } from 'react-router-dom';

export default class DanceMenu extends React.Component{
    render() {
      return (
        <Menu pointing>
          <Menu.Item
            name='Studios'
            as={Link}
            to='/studios'
            icon='map marker alternate'
          />
          <Menu.Item
            name='Events'
            as={Link}
            to='/events'
            icon='calendar alternate outline'
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='Sign Up'
              as={Link}
              to='/login'
              icon='signup'
            />
          </Menu.Menu>
        </Menu>
      )
    }
}
