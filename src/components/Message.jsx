import React from 'react'
import { ListItem, Avatar } from 'material-ui'

class Message extends React.Component {
  render() {
    return(
      <ListItem leftAvatar={ <Avatar src="http://www.esp8266.com/images/user4.png" /> }>
        { this.props.message }
      </ListItem>
    )
  }
}

export default Message
