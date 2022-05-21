import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";
import {Clock} from "./components/Clock";
import {Component} from "react";
import {List} from "./components/List";
import {ManagedComponent} from "./components/ManagedComponent";
import {UnmanagedComponent} from "./components/UnmanagedComponent";
import {FunctionalCounter} from "./components/FunctionalCounter";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClockVisible: true
        };
        this.toggleButton = this.toggleButton.bind(this);
        this.list = [
            {
                id: 1,
                href: 'http://google.com.ua',
                text: 'Google 1'
            }, {
                id: 2,
                href: 'http://google.com.ua',
                text: 'Google 2'
            }, {
                id: 3,
                href: 'http://google.com.ua',
                text: 'Google 3'
            },{
                id: 4,
                href: 'http://google.com.ua',
                text: 'Google 4'
            },{
                id: 5,
                href: 'http://google.com.ua',
                text: 'Google 5'
            }
        ];
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
                    <FunctionalCounter min={0} max={20} />
                    <List list={this.list} />
                    <ManagedComponent />
                    <UnmanagedComponent
                        firstName="Ivan"
                        city="2"
                        biography="Some text"
                    />
                    <button onClick={this.toggleButton}>
                        {
                            this.state.isClockVisible ? 'Hide' : 'Show'
                        }
                    </button>
                    {this.state.isClockVisible &&
                        <Clock/>
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
