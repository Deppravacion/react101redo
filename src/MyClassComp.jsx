import React from "react";

class MyClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.names = ['Tyson', 'OG', 'Mila', 'Pepper'];
    this.state = {
      name: '',
      count: 0,
      stateName: this.props.propName, // must pass props as parameter above
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
      stateName: this.names[i],
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
      stateName: '',
    })
  }


  render() {
    const word = 'Cool';
    const { name, count, stateName } = this.state; // destructure like a pro
    const { propName, anotherProp } = this.props; // destructure like a pro
    return (
      <div>
        <div>Hello, {name} - using State</div>
        <h1>{propName}</h1>
        <h5>{stateName} - - - stateName uses props updates via STATE</h5>
        <h1>{anotherProp} using anotherProp from Props</h1>
        <div>Count, {count} - - - this is STATE</div>

        <button onClick={this.shuffle}>Click and shuffle Me</button>
        <button onClick={this.increment}>Click and increment Me</button>
        <button onClick={this.reset}>Click and reset Me</button>
      </div>
    )
  }
}

export default MyClassComp;
