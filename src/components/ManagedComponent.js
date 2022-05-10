import React from "react";

export class ManagedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.cities = [
            {
                id: 1,
                text: 'Kyiv'
            },
            {
                id: 2,
                text: 'Zhytomyr'
            },
            {
                id: 3,
                text: 'Kharkiv'
            },
        ];
        this.state = {
            firstName: 'Petro',
            city: '1',
            biography: 'Some text'
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        );
    }

    render() {
        return (
            <form>
                <div>
                    <input type="text" name="firstName"
                           value={this.state.firstName}
                           onChange={this.handleInput}
                    />
                </div>
                <div>
                    <select name="city" value={this.state.city}
                            onChange={this.handleInput}>
                        {this.cities.map(
                            (item) =>
                                <option key={item.id.toString()} value={item.id.toString()}>
                                    {item.text}
                                </option>
                        )}
                    </select>
                </div>
                <div>
                    <textarea name="biography"
                              value={this.state.biography}
                              onChange={this.handleInput}
                    />
                </div>
                <div>
                    <div>FirstName: {this.state.firstName}</div>
                    <div>City: {this.state.city}</div>
                    <div>Biography: {this.state.biography}</div>
                </div>
            </form>
        );
    }

}