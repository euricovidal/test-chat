import React from 'react'
import MessageList from './MessageList.jsx'
import ChannelList from './ChannelList.jsx'
import MessageBox  from './MessageBox.jsx'

class Chat extends React.Component {
  render() {
    var box_style = {
      display:  'flex',
      flexFlow: 'row wrap',
      maxWidth: 1280,
      width:    '100%',
      margin:   '30px auto 30px'
    }

    return (
      <div>
        <div style={ box_style }>
          <ChannelList />
          <MessageList />
        </div>
        <MessageBox />
      </div>
    )
  }
}

export default Chat
