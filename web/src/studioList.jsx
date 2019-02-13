import React, {Component} from 'react';
import Studio from './studio.jsx'

class StudioList extends Component {
    render() {
            var salsa = <Studio
            name='Dance School Niculu'
            style= 'salsa'
            location='Chene Close'/>
          var sokkie = <Studio
            name='Sokkie House Dance School'
            style= 'sokkie'
            location='Opskop'/>
                  
          return (
            <ul>
              <li>{salsa}</li>
              <li>{sokkie}</li>
            </ul>
          )
    }
}

export default StudioList;