import React from 'react'
import { Card } from 'material-ui'
import trim from 'trim'
import Firebase from 'firebase'

class MessageBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
    this.firebase = Firebase.initializeApp({
      apiKey:        "AIzaSyD6uKj1UY3dv8gOabzv9ITHC_4Dmj_OiG4",
      authDomain:    "chat-4f2ed.firebaseapp.com",
      databaseURL:   "https://chat-4f2ed.firebaseio.com",
      storageBucket: "chat-4f2ed.appspot.com"
    }, 'MessageBox')
    this.database = this.firebase.database()
  }
  onChange(event) {
    this.setState({
      message: event.target.value
    })
  }
  onKeyUp(event) {
    if(event.keyCode === 13 && trim(event.target.value) !== '') {
      event.preventDefault()
      this.database.ref('messages').push({
        message: this.state.message
      })
      this.setState({
        message: ''
      })
    }
  }
  render() {
    var card_style = {
      maxWidth: 1280,
      margin: '30px auto',
      padding: 30
    }
    var textarea_style = {
      width: '100%',
      borderColor: '#D0D0D0',
      resize: 'none',
      borderRadius: 3,
      minHeight: 50,
      color: '#555',
      fontSize: 14,
      outline: 'auto 0px'
    }

    return(
      <Card style={ card_style }>
        <textarea
          value={ this.state.message }
          onChange={ this.onChange.bind(this) }
          onKeyUp={ this.onKeyUp.bind(this) }
          style={ textarea_style } />
      </Card>
    )
  }
}

export default MessageBox
