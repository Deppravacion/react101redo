import React from "react";

class MyClassComp extends React.Component {
  constructor() {
    super();
    this.names = ['Tyson', 'OG', 'Mila', 'Pepper'];
    this.state = {
      name: '',
      count: 0,
    }
    // this.shuffle = this.shuffle.bind(this); // if you use arrow function no need for this
  }

  popup() {
    alert('Alert Alert')
  }

  shuffle = () => {
    const i = Math.floor(Math.random() * this.names.length);
    this.setState({ 
      name: this.names[i],
      count: this.state.count + 1,

    })
  }

  increment = () => {
    this.setState({ count: this.state.count + 1})
  }

  reset = () => {
    this.setState({ 
      count: 0,
      name: '',
    })
  }


  render() {
    const word = 'Cool';
    return (
      <div>
        <div>Hello, {this.state.name}</div>
        <div>Count, {this.state.count}</div>
        <button onClick={this.shuffle}>Click and shuffle Me</button>
        <button onClick={this.increment}>Click and increment Me</button>
        <button onClick={this.reset}>Click and reset Me</button>
      </div>
    )
  }
}

export default MyClassComp;
