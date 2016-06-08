import React       from 'react'
import MessageList from './MessageList.jsx'
import ChannelList from './ChannelList.jsx'
import MessageBox  from './MessageBox.jsx'
import ChatStore   from '../stores/ChatStore.js'
import { withRouter } from 'react-router'

class Chat extends React.Component {
  componentWillMount() {
    var state = ChatStore.getState()
    if(!state.user) this.props.router.replace('/login')
  }
  //componentDidMount() {
    //this.props.router.setRouteLeaveHook(this.props.route, () => {
      //if (this.state && this.state.unsaved)
        //return 'You have unsaved information, are you sure you want to leave this page?'
    //})
  //}
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

export default withRouter(Chat)
