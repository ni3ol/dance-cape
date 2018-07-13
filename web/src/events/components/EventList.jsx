import React from 'react';
import { Link, Item, Image, List, Divider, Segment } from 'semantic-ui-react'

export default class EventList extends React.Component {
  render() {
    return(
      // this.props.events.map((event, i) => { return (
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0BfPDG2L7D4dqhXe3mLzYuh8qO971IYRY6npGkFBxMXG7O8xJA' />

              <Item.Content>
                <Item.Header as='a' to='/studios'>{this.props.events.name}</Item.Header>
                <Item.Meta>{this.props.events.venue}</Item.Meta>
                <Item.Extra>{this.props.events.date}</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      // );}
      // )
    )
  }
}
