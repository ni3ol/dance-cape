import React from 'react';
import { Link, Input, Button, Form, Container, Label} from 'semantic-ui-react'
import EventList from 'web/component/EventList.jsx'


export default class EventsView extends React.Component {
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
    const { name, date, venue, events } = this.state;
    if (name !== '' && date !== '' && venue !== '') {
      const event = {
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
            <Input placeholder="Event name" type="text" onChange={e => this.handleNameChange(e)}/>
          </Form.Field>
          <Form.Field>
            <Label>Date</Label>
            <Input placeholder="Date" type="date" onChange={e => this.handleDateChange(e)} />
          </Form.Field>
          <Form.Field>
            <Label>Venue</Label>
            <Input placeholder="Venue" type="text" onChange={e => this.handleVenueChange(e)}/>
          </Form.Field>
          <Button primary type='submit' onClick={() => this.handleClick()}>Add event</Button>
          <EventList events={this.state.events} />
        </Form>
      </Container>
    );
  }
}
