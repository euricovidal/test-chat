import React   from 'react'
import Message from './Message.jsx'
import { Card, List } from 'material-ui'

class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        'Hullo there how are you?',
        'I am fine, and you?'
      ]
    }
  }
  render() {
    var messageNodes = this.state.messages.map((message) => {
      return (
        <Message key={message} message={message} />
      )
    })
    var card_style = {
      flexGrow:   2,
      marginLeft: 30
    }

    return (
      <Card style={ card_style }>
        <List>{messageNodes}</List>
      </Card>
    )
  }
}

export default MessageList
