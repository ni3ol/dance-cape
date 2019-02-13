import React, {Component} from 'react';

class Studio extends Component {
    render() {
        return (
            <div class="ui items">
            <div class="item">
                <div class="content">
                <a class="header">{this.props.name}</a>
                <div class="meta">
                    <span>{this.props.style}</span>
                </div>
                <div class="description">
                    <p></p>
                </div>
                <div class="extra">
                    {this.props.location}
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Studio;