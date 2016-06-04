import React   from 'react'
import Message from './Message.jsx'
import { Card, List } from 'material-ui'
import Firebase from 'firebase'
import _ from 'lodash'

class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: {}
    }

    this.firebase = Firebase.initializeApp({
      apiKey:        "AIzaSyD6uKj1UY3dv8gOabzv9ITHC_4Dmj_OiG4",
      authDomain:    "chat-4f2ed.firebaseapp.com",
      databaseURL:   "https://chat-4f2ed.firebaseio.com",
      storageBucket: "chat-4f2ed.appspot.com"
    }, 'MessageList')
    this.database = this.firebase.database().ref('messages')
    this.database.on('child_added', (msg) => {
      if(this.state.messages[msg.key]) return
      let msgVal = msg.val()
      msgVal.key = msg.key
      this.state.messages[msgVal.key] = msgVal
      this.setState({messages: this.state.messages})
    })

    this.database.on('child_removed', (msg) => {
      delete this.state.messages[msg.key]
      this.setState({messages: this.state.messages})
    })
  }
  render() {
    var messageNodes = _.values(this.state.messages).map((message) => {
      return (
        <Message key={message.message} message={message.message} />
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
