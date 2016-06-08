import React           from 'react'
import Channel         from './Channel.jsx'
import ChatStore       from '../stores/ChatStore.js'
import connectToStores from 'alt-utils/lib/connectToStores'
import { Card, List, CircularProgress } from 'material-ui'

class ChannelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.state.selectedChannel = this.props.params.channel
    ChatStore.getChannels(this.state.selectedChannel)
  }
  componentWillReceiveProps(nextProps) {
    if(this.state.selectedChannel !== nextProps.params.channel) {
      this.state.selectedChannel = nextProps.params.channel
      ChatStore.getChannels(this.state.selectedChannel)
    }
  }
  static getStores() {
    console.log('getStoresMessage')
    return [ChatStore]
  }
  static getPropsFromStores() {
    console.log('getPropsFromStoresMessage')
    return ChatStore.getState()
  }
  render() {
    if(!this.props.channels){
      let circular_style = {
        paddingTop:    '20px',
        paddingBottom: '20px',
        margin:        '0 auto',
        display:       'block',
        width:         '60px'
      }

      return (
        <Card style={ { flexGrow: 1 } }>
          <CircularProgress
           style={ circular_style }
           mode="indeterminate" />
        </Card>
      )
    }

    var channelNodes = _.keys(this.props.channels).map((k) => {
      return (<Channel key={ k } channel={ this.props.channels[k] } />)
    })

    return (
      <Card style={ { flexGrow: 1 } }>
        <List>{ channelNodes }</List>
      </Card>
    )
  }
}

export default connectToStores(ChannelList)
