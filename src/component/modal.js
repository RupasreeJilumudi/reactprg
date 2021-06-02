import React, { Component } from 'react';
import Content from '../mock/MockContent'
import TodoButton from '../component/common/Button'
class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            title: props.title,
            key: props.key,
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({                          //set the state based on properties,it is react event this will receive next propeties
            title: nextProps.title,          //i.e., going to received component,every time we will receive new propertie(by nextprops) will reset the state 
        });
    }
    titleHandler(e) {
        this.setState({ title: e.target.value });
    }
    handleSave() {                              //in this we can modify the existing data with new data
        const item = {                       //handle save is sending the modal state as item  send this change to parent component
            "key": this.state.key,
            "name": this.state.title
        };
        this.props.saveModalDetails(item)             //savemodaldetails received as prop from parent in list.js line78  //here newitem can contain modified data to item
    }
    render() {
         //props will get values from data savemodal details method in listedit,in state it will beget modify data
      return (
         <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
          <div className="modal-content">
          <div className="modal-header">
           <h5 className="modal-title" id="exampleModalLabel">{this.props.modelHeadMsg}  </h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
          </div>
            <div className="modal-body">
          <p><span className="modal-lable">Title:</span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p>
           </div>
          <div className="modal-footer" data-dismiss="modal" type="button" >
          <TodoButton  className="btn btn-primary"  name={this.props.cancel}/>
          <TodoButton  className="btn btn-primary"  onClick={() => { this.handleSave() }} name={this.props.ok}/>
           </div>
          </div>
         </div>
           </div>
        );
    }
}
Modal.defaultProps = Content
export default Modal;