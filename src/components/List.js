import React from "react";
export class List extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <ul>
                {this.props.list.map(
                    (item) =>
                        <li key={item.id.toString()}>
                            <a href={item.href}>
                                {item.text}
                            </a>
                        </li>
                )}
            </ul>
        );
    }

}