import React, { Component } from 'react'
import Content from '../../mock/MockContent'
class TodoButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className="btn btn-primary"
                onClick={this.props.onClick}>
                {this.props.name}
            </button>
        )
    }
}
TodoButton.defaultProps = Content
export default TodoButton

