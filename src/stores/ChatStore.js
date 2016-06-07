import alt           from '../alt'
import Actions       from '../actions'
import ChannelSource from '../sources/ChannelSource.js'
import MessageSource from '../sources/MessageSource.js'
import _             from 'lodash'

class ChatStore {
  constructor() {
    this.state = {
      user:            null,
      channels:        null,
      message:         null,
      messages:        null,
      messagesLoading: true
    }

    this.bindListeners({
      login:            Actions.LOGIN,
      receivedChannels: Actions.CHANNELS_RECEIVED,
      receivedMessages: Actions.MESSAGES_RECEIVED,
      channelOpened:    Actions.CHANNEL_OPENED,
      messagesLoading:  Actions.MESSAGES_LOADING,
      sendMessage:      Actions.SEND_MESSAGE,
      messageReceived:  Actions.MESSAGE_RECEIVED
    })

    this.exportAsync(ChannelSource)
    this.exportAsync(MessageSource)
  }

  messageReceived(message) {
    if(this.state.messages[message.key]) return
    this.state.messages[message.key] = message
    this.setState({
      messages: this.state.messages
    })
  }

  sendMessage(message) {
    console.log('sendMessage store')
    console.log(message)
    this.state.message = message
    setTimeout(this.getInstance().sendMessage, 10)
  }

  messagesLoading() {
    this.setState({ messagesLoading: true })
  }

  channelOpened(selectedChannel) {
    console.log('channelOpened')
    _(this.state.channels)
      .values()
      .each((channel) => {
        channel.selected = (channel.key === selectedChannel.key)
      })
      .values()

    selectedChannel.selected = true
    this.setState({
      selectedChannel,
      messagesLoading: true,
      channels: this.state.channels
    })

    setTimeout(this.getInstance().getMessages, 100)
  }

  receivedMessages(messages) {
    console.log('receivedMessages')
    _(messages)
      .keys()
      .each((k) => {
        messages[k].key = k
      })

    console.log(messages)
    this.setState({
      messages,
      messagesLoading: false
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
