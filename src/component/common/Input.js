import React, { Component } from 'react'
import Content from '../../mock/MockContent'
class AddtodoInput extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.handleChange} type="text" placeholder={this.props.placeholder}
                    value={this.props.content} />
            </div>
        )
    }
}
AddtodoInput.defaultProps = Content
export default AddtodoInput
