import React   from 'react'
import Channel from './Channel.jsx'
import { Card, List } from 'material-ui'

class ChannelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: [
        'Dogs',
        'Cats'
      ]
    }
  }
  render() {
    var channelNodes = this.state.channels.map((channel) => {
      return (
        <Channel key={channel} channel={channel} />
      )
    })
    var card_style = {
      flexGrow: 1
    }

    return (
      <Card style={ card_style }>
        <List>{channelNodes}</List>
      </Card>
    )
  }
}

export default ChannelList
