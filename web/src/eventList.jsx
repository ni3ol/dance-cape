import React, { Component } from 'react'
import Event from './event.jsx'

class EventList extends React.Component {
    render() {
      var salsa = <Event
        name='La Parada Salsa'
        danceStyle= 'salsa'
        location='La Parada Bree Street'
        date= '2019-01-10'
        time= '20:00'
        description= 'R50 entrance'/>
      var sokkie = <Event
        name='Opskop Sokkie'
        danceStyle= 'sokkie'
        location='Opskop Stellenbosch'
        date= '2019-01-11'
        time= '21:00'
        description= 'R30 entrance'/>
              
      return (
        <ul>
          <li>{salsa}</li>
          <li>{sokkie}</li>
        </ul>
      )
    }  
  }
  
  export default EventList;