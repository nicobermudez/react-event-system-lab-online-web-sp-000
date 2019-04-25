// Code Keypad Component Here
import React from 'react';
export default class Keypad extends React.Component {
  


  render() {
    return (
      <div>
        <input
        type="password"
        OnKeyUp={console.log("Entering password...")}
        />
      </div>
    )
  }
}
