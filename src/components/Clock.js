import React from 'react';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        this.tick = this.tick.bind(this);
    }
    tick() {
        this.setState(
            {
                date: new Date()
            }
        );
    }
    componentDidMount() {
        /*this.timerId = setInterval(
            () => {
                this.tick();
            }, 1000
        );*/
        this.timerId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className="clock">{this.state.date.toLocaleTimeString()}</div>
        );
    }
}