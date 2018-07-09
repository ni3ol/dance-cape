import React from 'react';
import { Input, Button, Form, Container, Label} from 'semantic-ui-react'
import EventList from '../component/EventList.jsx'

export default class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      venue: '',
      events: [],
    }
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
    console.log(this.state)
  }

  handleDateChange(e) {
    this.setState({
      date: e.target.value
    });
    console.log(this.state)
  }

  handleVenueChange(e) {
    this.setState({
      venue: e.target.value
    });
    console.log(this.state)
  }

  handleClick() {
    let { name, date, venue, events } = this.state;
    if (name !== '' && date !== '' && venue !== '') {
      let event = {
        name: name,
        date: date,
        venue: venue,
      }
      events.push(event)
      this.setState({
        events
      });
      console.log(this.state)
    }
  }

  render() {
    return(
      <Container>
        <Form>
          <p>Add a dance related event here:</p>
          <Form.Field>
            <Label>Name</Label>
            <Input placeholder="Event name" type="text" onChange={this.handleNameChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <Label>Date</Label>
            <Input placeholder="Date" type="date" onChange={this.handleDateChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <Label>Venue</Label>
            <Input placeholder="Venue" type="text" onChange={this.handleVenueChange.bind(this)}/>
          </Form.Field>
          <Button primary type='submit' onClick={this.handleClick.bind(this)}>Add event</Button>
          <EventList events={this.state.events}/>
        </Form>
      </Container>
    );
  }
}
