import React from 'react';

class Keypad extends React.Component {



  render() {
    return (
      <div>
        <input
          type="password"
          onKeyUp={this.console.log('Entering password...')}
        />
      </div>
    )
  }
}

export default Keypad;
