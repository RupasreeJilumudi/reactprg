import { data, map } from 'jquery';
import React, { Component } from 'react';
import Modal from './modal.js';
import Content from '../mock/MockContent'
import TodoButton from '../component/common/Button'
class ListEdit extends Component {
  constructor(props) {
    super(props);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      key:0,
      data: props.data,
      requiredItem: 0,
      text: [],
   }
  }
  replaceModalItem(item) {
    this.setState({
      requiredItem: item, key: item.key    
    });
  }
saveModalDetails(item) {
    const newdata = [];                 //here we are saving the item from modal putting the state in right place
    const data=this.state.data;
    map(this.state.data, (obj) => {
      if(this.state.key == obj.key)
      {
        newdata.push(item);
      } 
      else{
        newdata.push(obj);
      }
    });
  this.setState({ data: newdata });
  }
deleteItem(item) 
    {
      const newdata = [];
      const data=this.state.data;
      map(this.state.data, (obj) => {
      if(item.key != obj.key)
        {
         newdata.push(obj);
        } 
        });
    this.setState({ data: newdata });
       }
render() 
  {  
    const text = this.state.data.map((item, index) => {        //in this they contain the user entered value(name) 
      return (                                                //if user done any modifications on existed data it will contain
      <tr key={index}>                                         
          <td>{item.name}</td>
          <td>
          <div data-toggle="modal" data-target="#exampleModal" >
         <TodoButton  onClick={() => this.replaceModalItem(item)} name={this.props.edit}/> </div>
         <TodoButton  className="btn btn-danger" onClick={() => this.deleteItem(item)} name={this.props.delete}/>
          </td>
        </tr>
      )
    });  
     return (
      <div>
        <div style={{ textAlign: "center" }}>
          <br/><br/>
        </div>
      <table className="table table-striped">
          <tbody>
            {text}                              
          </tbody>
        </table>
        <Modal                                         //from here we are calling modal 
          title={this.state.requiredItem.name}
         key={this.state.requiredItem.key}
          saveModalDetails={this.saveModalDetails}
        /> 
      </div>
    );
   }
}
ListEdit.defaultProps = Content
export default ListEdit;


