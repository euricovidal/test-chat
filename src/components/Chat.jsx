import React          from 'react'
import MessageList    from './MessageList.jsx'
import ChannelList    from './ChannelList.jsx'
import MessageBox     from './MessageBox.jsx'
import ChatStore      from '../stores/ChatStore.js'
import { withRouter } from 'react-router'

class Chat extends React.Component {
  componentWillMount() {
    var state = ChatStore.getState()
    if(!state.user) this.props.router.replace('/login')
  }
  render() {
    var box_style = {
      display:  'flex',
      flexFlow: 'row wrap',
      maxWidth: 1280,
      width:    '100%',
      margin:   '30px auto 30px'
    }

    return <div>
      <div style={ box_style }>
        <ChannelList { ...this.props } />
        <MessageList />
      </div>
      <MessageBox />
    </div>
  }
}

export default withRouter(Chat)
