import React           from 'react'
import Message         from './Message.jsx'
import ChatStore       from '../stores/ChatStore.js'
import connectToStores from 'alt-utils/lib/connectToStores'
import Firebase        from 'firebase'
import _               from 'lodash'
import { Card, List, CircularProgress } from 'material-ui'

class MessageList extends React.Component {
  static getStores() {
    return [ChatStore]
  }
  static getPropsFromStores() {
    return ChatStore.getState()
  }
  render() {
    let messageNodes = null
    if(this.props.messagesLoading) {
      var circular_style = {
        paddingTop:    20,
        paddingBottom: 20,
        margin:        '0 auto',
        display:       'block',
        width:         '60px'
      }

      messageNodes = <CircularProgress mode="indeterminate" style={ circular_style } />
    } else {
      messageNodes = _.values(this.props.messages).map((message) => {
        return <Message key={message.key} message={message} />
      })
    }

    var card_style = {
      flexGrow:   2,
      marginLeft: 30
    }

    return <Card style={ card_style }>
      <List>{messageNodes}</List>
    </Card>
  }
}

export default connectToStores(MessageList)
