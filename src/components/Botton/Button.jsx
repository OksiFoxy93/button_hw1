import { Component } from "react";

class Button extends Component {

    render() {
        const { text, onClick, backgroundColor } = this.props;

        return (
            <button
                className="button"
                onClick={ onClick }
                style={ {backgroundColor: backgroundColor} }>
                { text }
            </button>
        )
    }
}

export default Button;
