import React from "react";

export default class Button extends React.Component {
    handleClick() {
        console.log("btn was clicked");
        this.props.onClick();
    }
    render() {
        return (
            <button className="btn btn-primary" onClick={() => this.handleClick()}>
                {this.props.caption}
            </button>
        );
    }
}