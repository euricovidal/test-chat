import React from 'react'
import { ListItem } from 'material-ui'

class Channel extends React.Component {
  render() {
    return(
      <ListItem>{ this.props.channel }</ListItem>
    )
  }
}

export default Channel
