import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export class MainHeader extends React.Component{
    render() {
      return (
        <Container textAlign='center'>
          <Header as={Link} to='/'>DanceCape</Header>
        </Container>
      )
    }
}
