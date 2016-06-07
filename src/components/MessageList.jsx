import React     from 'react'
import Message   from './Message.jsx'
import ChatStore from '../stores/ChatStore.js'
import connectToStores from 'alt-utils/lib/connectToStores'
import { Card, List, CircularProgress }  from 'material-ui'
import Firebase        from 'firebase'
import _               from 'lodash'

class MessageList extends React.Component {
  constructor(props) {
    super(props)
    setTimeout((ChatStore) => {
      ChatStore.getMessages()
    }, 2000, ChatStore)

    //this.firebase = Firebase.initializeApp({
      //apiKey:        "AIzaSyD6uKj1UY3dv8gOabzv9ITHC_4Dmj_OiG4",
      //authDomain:    "chat-4f2ed.firebaseapp.com",
      //databaseURL:   "https://chat-4f2ed.firebaseio.com",
      //storageBucket: "chat-4f2ed.appspot.com"
    //}, 'MessageList')
    //this.database = this.firebase.database().ref('messages')
    //this.database.on('child_added', (msg) => {
      //if(this.state.messages[msg.key]) return
      //let msgVal = msg.val()
      //msgVal.key = msg.key
      //this.state.messages[msgVal.key] = msgVal
      //this.setState({messages: this.state.messages})
    //})

    //this.database.on('child_removed', (msg) => {
      //delete this.state.messages[msg.key]
      //this.setState({messages: this.state.messages})
    //})
  }
  static getStores() {
    return [ChatStore]
  }
  static getPropsFromStores() {
    return ChatStore.getState()
  }
  render() {
    let messageNodes = null
    if(!this.props.messagesLoading) {
      messageNodes = _.values(this.props.messages).map((message) => {
        return (
          <Message key={message.message} message={message.message} />
        )
      })
    } else {
      var circular_style = {
        paddingTop:    20,
        paddingBottom: 20,
        margin:        '0 auto',
        display:       'block',
        width:         '60px'
      }

      messageNodes = <CircularProgress mode="indeterminate" style={ circular_style } />
    }

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

export default connectToStores(MessageList)
