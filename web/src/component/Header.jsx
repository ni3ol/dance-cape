import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export class MainHeader extends React.Component{
    render() {
      return (
        <Container textAlign='center'>
          <Image src="http://www.steppintimepac.com/wp-content/uploads/sites/94/2012/10/Dance-Header.jpg"/>
          <Header size='huge' as={Link} to='/'>DanceCape</Header>
          <p>For all your dancing needs in the greater Cape Town region</p>
        </Container>
      )
    }
}
