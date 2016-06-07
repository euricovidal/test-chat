import alt from '../alt'
import Actions from '../actions'
import ChannelSource from '../sources/ChannelSource.js'
import MessageSource from '../sources/MessageSource.js'
import _ from 'lodash'

class ChatStore {
  constructor() {
    this.state = { user: null, messages: null }

    this.bindListeners({
      login:            Actions.LOGIN,
      receivedChannels: Actions.CHANNELS_RECEIVED,
      receivedMessages: Actions.MESSAGES_RECEIVED
    })

    this.exportAsync(ChannelSource)
    this.exportAsync(MessageSource)
  }

  receivedMessages(messages) {
    console.log('receivedMessages')
    _(messages)
      .keys()
      .each((k) => {
        messages[k].key = k
      })
      //.value()

    console.log(messages)
    this.setState({
      messages
    })
  }

  receivedChannels(channels) {
    console.log('receivedChannels')
    let selectedChannel
    _(channels)
      .keys()
      .each((key, index) => {
        channels[key].key = key
        if(index === 0) {
          channels[key].selected = true
          selectedChannel = channels[key]
        }
      })
      //.value()

    this.setState({
      channels,
      selectedChannel
    })
  }

  login(user) {
    console.log('login store')
    this.setState({ user: user })
  }
}

export default alt.createStore(ChatStore)
