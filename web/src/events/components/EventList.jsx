import React from 'react';
import { Item, Image, List, Divider, Segment } from 'semantic-ui-react'

export default class EventList extends React.Component {
  render() {
    return(
      this.props.events.map((event, i) => { return (
        <Segment key={i}>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0BfPDG2L7D4dqhXe3mLzYuh8qO971IYRY6npGkFBxMXG7O8xJA' />

              <Item.Content>
                <Item.Header as='a'>{event.name}</Item.Header>
                <Item.Meta>{event.venue}</Item.Meta>
                <Item.Extra>{event.date}</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      );}
      )
    )
  }
}
