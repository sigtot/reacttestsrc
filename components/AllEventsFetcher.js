import React from 'react';
import { AllEventsDisplayer } from './AllEventsDisplayer';

export class AllEventsFetcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        }
    }

    componentDidMount() {
        return fetch('http://events.webandresen.no/events')
            .then( response => response.json() )
            .then( json => {
                console.log(json);
                this.setState(previousState => {
                        return {events: json};
                    });

            });
    }

    render() {
        return <AllEventsDisplayer events={this.state.events} />;
    }
}