import React from 'react';
import { Segment, Header, Dropdown, Popup, Item, Divider, Input, Button, Form, Container, Label} from 'semantic-ui-react'
import CreateEventForm from 'web/events/components/createEventForm.jsx'
import EventList from 'web/events/components/EventList.jsx'
import EventService from 'web/events/service/EventService.jsx'


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

  componentWillMount() {
  this.fetchEvents();
}

  fetchEvents() {
  EventService.getEvents().then((events) => {
    this.setState({ events });
  });
}

  render() {
    const type = [
      { key: 1, text: 'Competition', value: 1 },
      { key: 2, text: 'Social Dancing', value: 2 },
    ]

    const style = [
      { key: 1, text: 'Salsa', value: 1 },
      { key: 2, text: 'Ballet', value: 2 },
    ]

    const area = [
      { key: 1, text: 'CBD', value: 1 },
      { key: 2, text: 'Northern Suburbs', value: 2 },
      { key: 3, text: 'Southern Suburbs', value: 3 },
      { key: 4, text: 'Somerset West', value: 4 },
    ]

    console.log(this.state.events)

    return(
      <Container>
        <Header>Events</Header>
        <a href="/create-event">Create Event</a>
        <Segment>
          <Dropdown text='Style' options={style}/>
          <Dropdown text='Type' options={type}/>
          <Dropdown text='Area' options={area}/>
        </Segment>
        <Header>This Weekend</Header>
        <Divider/>
        <EventList events={this.state.events} />
        <Divider/>
        <Header>MONDAY</Header>
        <Divider/>
        <EventList events={this.state.events} />
      </Container>
    );
  }
}
