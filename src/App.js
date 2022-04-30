import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";
import {Clock} from "./components/Clock";
import {Component} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClockVisible: true
        };
        this.toggleButton = this.toggleButton.bind(this);
    }

    toggleButton() {
        this.setState(
            (state, props) => {
                return {
                    isClockVisible: !state.isClockVisible
                };
            }
        );
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <button onClick={this.toggleButton}>
                        {
                            this.state.isClockVisible ? 'Hide' : 'Show'
                        }
                    </button>
                    {this.state.isClockVisible &&
                        <Clock />
                    }
                    <Counter/>
                    <Counter value={2} min={-5} max={5}/>
                    <Counter value={10} max={15}/>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}
