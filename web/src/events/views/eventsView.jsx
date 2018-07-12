import React from 'react';
import { Segment, Header, Dropdown, Popup, Item, Link, Input, Button, Form, Container, Label} from 'semantic-ui-react'
import CreateEventForm from 'web/events/components/createEventForm.jsx'
import EventList from 'web/events/components/EventList.jsx'


export default class EventsView extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      venue: '',
      events: [
        {name: 'Sokkie', date: '2019-09-02', venue: 'UCT'},
        {name: 'Dinner and Dance', date: '2019-08-02', venue: 'Kelvin Grove'},
        {name: 'Salsa', date: '2019-07-02', venue: 'La Parada'}
      ],
    }
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
    return(
      <Container>
        <Header>Events</Header>
        <a href="/create-event">Create Event</a>
        <Segment>
          <Dropdown text='Style' options={style}/>
          <Dropdown text='Type' options={type}/>
          <Dropdown text='Area' options={area}/>
        </Segment>
        <EventList events={this.state.events} />
      </Container>
    );
  }
}
