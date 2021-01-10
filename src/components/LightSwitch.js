import React from 'react';

class LightSwitch extends React.Component {

  constructor() {
    super()
    this.state = {
      toggled: true
    }
  }

  handleClick = () => {
    this.setState( currentState => {
      return ({
        toggled: !currentState.toggled
      })
    })
  }
  
  handleDisplay = () => {
    if(this.state.toggled) {
      return (
        'ON'
      )
    } else {
      return (
        'OFF'
      )
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} >
          {/* {this.state.toggled ? 'ON' : 'OFF'} */}
          {this.handleDisplay()}
        </button>
      </div>
    )
  }

}

export default LightSwitch