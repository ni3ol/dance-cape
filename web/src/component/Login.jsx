import React from 'react'
import { Container, Form, Button, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  render() {
    return(
      <Container>
        <Form>
          <Form.Field>
            <label>Username or email</label>
            <input placeholder='username/email' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
          </Form.Field>
          <Button primary type='submit'>Submit</Button>
          <Link to="/signup">
            <Button secondary>
              <p>New? Sign up here</p>
            </Button>
          </Link>
        </Form>
      </Container>
    );
  }
}
