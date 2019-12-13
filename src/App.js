import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
      //InputNum: 0,
      myList: [],
      checked : 0,
  }
  constructor(props){
    super(props);
    this.myref = React.createRef();
  }
  HandleClick(e){
    if(e.target.checked === true){
      this.setState({
        checked: this.state.checked + 1,
      })
    } else{
      this.setState({
        checked: this.state.checked - 1,
      })
    }
  }
  HandleonChange(e){
    this.setState({
      //InputNum: Number(e.target.value),
      myList:Array.from(Array(Number(e.target.value)).keys()),
      checked: 0,
    });
  }
  

  render(){
    if(this.state.checked === 0 && this.state.myList.length !== 0 ){
      var node = this.myref.current;
      console.log(node);
      var tempNode = node.querySelectorAll('.check-Box');
      console.log(tempNode);
      tempNode.forEach(element => {
        element.checked = false;
      });
    }
    
    return (
      <div ref = {this.myref}>
        <input type = "text" onChange = {this.HandleonChange.bind(this)}/>    {this.state.InputNum}
        {this.state.myList.map(item => {return <li key = {item}
        ><input type = "checkbox" value = {item} name = {item} 
  onClick = {this.HandleClick.bind(this)} className = "check-Box"></input></li>})}
        {this.state.checked}
      </div>
    );
  }
}

export default App;
