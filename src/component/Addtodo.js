import React, { Component } from 'react'
import ListEdit from './ListEdit';
import './Addtodo.css';
import Content from '../mock/MockContent'
import AddtodoInput from '../component/common/Input'
import TodoButton from '../component/common/Button'
export class Addtodo extends Component {
    state = {
        content: '',
        data: [],
        count:0
      }
      handleChange = (e) => {             //what we are entering the data in text box it will handled here
       this.setState
          ({
          content: e.target.value
        })
      }
     submitData= (e) => {   
      e.preventDefault();                              //when user click on add it will come here
      this.props.addtodo(this.state);
      const data = this.state.data;                         // here data is array 
      const obj ={                                          //in content it store the value we which we entered
        "name": this.state.content,                        //here name represent data what  we are entered
        "key": this.state.count                             //here key(count) represent index value
      };
      data.push(obj);                                    
       this.setState({
       content:'',
       data, count: this.state.count+1
        })
      }
    render() {
        return (
            <div className="addtodo" text-align="center" >
            <form align="center">
              <label htmlFor="content"></label>
             <AddtodoInput placeholder={this.props.placeholder}  content={this.state.content} handleChange= {this.handleChange}/>  
             {/* for add button */}
              <TodoButton  onClick={this.submitData} name={this.props.add}/>
             </form>
            <div>
            <ListEdit data={this.state.data}/>
              </div>
          </div>
       )
    }
}
Addtodo.defaultProps = Content
export default Addtodo;