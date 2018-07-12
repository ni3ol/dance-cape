import React from 'react';
import { Input, Label, Form, Image, Item, Button, Header, Container, Segment, Dropdown, Checkbox } from 'semantic-ui-react'

export default class PartnerSearchView extends React.Component {
  render() {
    const gender = [
      { key: 1, text: 'Female', value: 1 },
      { key: 2, text: 'Male', value: 2 },
    ]

    const style = [
      { key: 1, text: 'Latin', value: 1 },
      { key: 2, text: 'Ballroom', value: 2 },
    ]

    const area = [
      { key: 1, text: 'CBD', value: 1 },
      { key: 2, text: 'Northern Suburbs', value: 2 },
      { key: 3, text: 'Southern Suburbs', value: 3 },
      { key: 4, text: 'Somerset West', value: 4 },
    ]
    return(
      <Container>
        <p>This is the partner search page</p>
        <Header>Filter</Header>
        <Segment>
          <Dropdown text='Style' options={style}/>
          <Dropdown text='Gender' options={gender}/>
          <Dropdown text='Area' options={area}/>
        </Segment>

        <Item.Group>
          <Item>
            <Item.Image size='tiny' src='https://vignette.wikia.nocookie.net/justdance/images/4/4b/One_Thing_P1_Avatar.png/revision/latest?cb=20151106011738' />

            <Item.Content>
              <Item.Header as='a'>Zac Crumbley</Item.Header>
              <Item.Meta>Ballroom Competitive (Rising Star)</Item.Meta>
              <Item.Extra>Looking for a long term partner in Amsterdam</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src='https://vignette.wikia.nocookie.net/justdance/images/4/44/LikeIWouldAva.png/revision/latest?cb=20161025054143' />

            <Item.Content>
              <Item.Header as='a'>Nicol Vojacek</Item.Header>
              <Item.Meta>Latin Social Dancer (Silver 2)</Item.Meta>
              <Item.Extra>Looking for a partner in Cape Town</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>

        <Container>
          <Form>
            <Header>Create partner listing</Header>
            <Form.Field>
              <Label>Full Name</Label>
              <Input placeholder="Full name" type="text"/>
            </Form.Field>
            <Form.Field>
              <Label>Dance Style and Level</Label>
              <Input placeholder="Ballroom Competitive (Silver 1)" type="date"/>
            </Form.Field>
            <Form.Field>
              <Label>Details</Label>
              <Input placeholder="Looking in Southern Suburbs" type="text"/>
            </Form.Field>
            <Button primary type='submit'>Create partner listing</Button>
          </Form>
        </Container>
      </Container>

    );
  }
}
