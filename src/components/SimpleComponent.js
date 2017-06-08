import React from 'react';

class SimpleComponent extends React.Component {

  constructor(){
    super()
    this.state = {
      mood: "happy"
    }
  }

  getInitialState(){
    return {mood: "happy"}
  }

  handleClick(){
    this.state.mood === "happy" ? this.setState({ mood: "sad" }) : this.setState({ mood: "happy" })
  }

  render(){
    console.log(this.state.mood)
    return (
      <div onClick={this.handleClick.bind(this)}>
        {this.state.mood}
      </div>
    )
  }

}

export default SimpleComponent
