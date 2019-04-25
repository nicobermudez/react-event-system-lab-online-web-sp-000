import React from 'react';

class Keypad extends React.Component {
  handleInputPassword = () => console.log('Entering password...')


  render() {
    return (
      <div>
        <input
          type="password"
          OnKeyUp={this.handleInputPassword}
        />
      </div>
    )
  }
}
