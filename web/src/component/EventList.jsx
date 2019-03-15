import React from 'react';
import { List, Divider, Segment } from 'semantic-ui-react'

export default class EventList extends React.Component {
  render() {
    return(
      this.props.events.map((event, i) => { return (
        <Segment key={i}>
          <List>
            <List.Item key='event-name'>Event Name: {event.name}</List.Item>
            <List.Item key='event-date'>Event Date: {event.date}</List.Item>
            <List.Item key='event-venue'>Event Venue: {event.venue}</List.Item>
          </List>
        </Segment>
      );}
      )
    )
  }
}
