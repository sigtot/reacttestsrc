import React from 'react';
import { EventDisplayer } from './EventDisplayer';

export class AllEventsDisplayer extends React.Component {

    render() {
        const eventsList = this.props.events.map(event => <li key={event.id}><EventDisplayer event={event} /></li>);
        return <ul>{eventsList}</ul>;
    }
}

//const items = this.state.data.map(event => <li key={event.id}>{event.title}</li>)
