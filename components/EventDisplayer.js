import React from 'react';

export class EventDisplayer extends React.Component {

    render() {
        //const items = this.props.events.map(event => <li key={event.id}>{event.title}</li>)
        return <span>{this.props.event.title}</span>;
    }
}
