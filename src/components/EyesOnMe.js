// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends Component {
  render() {
    return (
      <button
      onFocus={console.log("Good!")}
      onBlur={}
      >
      </button>
    )
  }
}
