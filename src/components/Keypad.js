// Code Keypad Component Here
import React from 'react';
export default class Keypad extends Component {
  render() {
    return (
      <input
      type="password"
      OnKeyUp={console.log("Entering password...")}
      >
    )
  }
}
