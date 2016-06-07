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
        return (<Message key={message.key} message={message} />)
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
