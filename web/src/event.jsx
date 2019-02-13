import React, { Component } from 'react'

class Event extends Component {
    render() {
      return (
        <div>
            <div class="ui card">
            <div class="content">
                <a class="header">{this.props.name}</a>
                <div class="meta">
                <span class="date">{this.props.danceStyle}</span>
                </div>
                <div class="description">{this.props.description}</div>
            </div>
            <div class="extra content">
                <a>
                <i class="home"></i>
                {this.props.location}
                </a>
                <a>
                <i class="home"></i>
                {this.props.date}
                </a>    <a>
                <i class="home"></i>
                {this.props.time}
                </a>
            </div>
            </div> 
        </div>
      )
    }
  };

  export default Event;