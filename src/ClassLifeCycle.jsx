import React from "react";

class ClassLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.names = ['Tyson', 'OG', 'Mila', 'Pepper'];
    this.state = {
      name: '',
      date: new Date(),
    }
  }

  componentDidMount() {
    //a good place to add any API calls!
    this.timeId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  tick = () => {
    this.setState({date: new Date()});
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
    })
  }


  render() {
    const word = 'Cool';
    const { name, date } = this.state; // destructure like a pro
 
    return (
      <div>
        <div>Hello,{name}</div>      
        <h2>is it currently {date.toLocaleTimeString()}</h2>

        <button onClick={this.shuffle}>Click and shuffle Me</button>      
      
      </div>
    )
  }
}

export default ClassLifeCycle;