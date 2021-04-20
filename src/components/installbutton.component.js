import React, { Component } from 'react';

export default class InstallButton extends Component {
  state = {
    textValue: 'Install'
  }

  onPress = () => {
    this.setState({
      textValue: 'Play!'
    })
  }

  render() {
    return (
        <div>  
          <button title="Change Text" onClick = {this.onPress}><h5>{this.state.textValue}</h5></button>
        </div>
      
    )
  }
}

