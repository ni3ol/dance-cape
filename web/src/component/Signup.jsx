import React from 'react'
import { Container, Form, Button, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  render() {
    return(
      <Container>
        <Form>
          <Form.Field>
            <label>Full name</label>
            <input placeholder='Full name' />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button primary type='submit'>Sign up</Button>
        </Form>
      </Container>
    );
  }
}
