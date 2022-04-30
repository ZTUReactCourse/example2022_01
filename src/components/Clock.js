import React from 'react';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        this.tick = this.tick.bind(this);
        console.log('constructor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return {
            rnd : Math.random()
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return document.querySelector('.clock').innerHTML;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log(document.querySelector('.clock').innerHTML);
        console.log(snapshot);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate');
        console.log(nextState);
        return nextState.rnd > 0.5;
    }

    tick() {
        this.setState(
            {
                date: new Date()
            }
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
        /*this.timerId = setInterval(
            () => {
                this.tick();
            }, 1000
        );*/
        this.timerId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerId);
    }

    render() {
        console.log('render');
        return (
            <div className="clock">{this.state.date.toLocaleTimeString()}</div>
        );
    }
}