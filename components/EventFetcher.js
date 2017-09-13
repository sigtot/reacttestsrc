import React from 'react';
import { EventDisplayer } from "./EventDisplayer";

export class EventFetcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            event: {},
        }
    }

    componentDidMount() {
        return fetch('http://events.webandresen.no/events/' + this.state.id)
            .then( response => response.json() )
            .then( json => {
                console.log(json);
                this.setState(previousState => {
                    return {event: json};
                });

            });
    }

    render() {
        return <EventDisplayer event={this.state.event} />;
    }
}