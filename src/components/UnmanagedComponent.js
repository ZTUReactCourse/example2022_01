import React from "react";

export class UnmanagedComponent extends React.Component {
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
        this.firstName = React.createRef();
        this.city = React.createRef();
        this.biography = React.createRef();
        this.file = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let firstName = this.firstName.current.value;
        let city = this.city.current.value;
        let biography = this.biography.current.value;
        let files = this.file.current;
        for(let i = 0; i < files.files.length; i++)
            console.log(files.files[i].name);
        console.log(firstName);
        console.log(city);
        console.log(biography);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="firstName"
                           ref={this.firstName}
                           defaultValue={this.props.firstName}
                    />
                </div>
                <div>
                    <input multiple={true} type="file" ref={this.file} />
                </div>
                <div>
                    <select name="city"
                            ref={this.city}
                            defaultValue={this.props.city}>
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
                              ref={this.biography}
                              defaultValue={this.props.biography}
                    />
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        );
    }

}