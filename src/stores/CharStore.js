import alt from '../alt'
import Actions from '../actions'

class ChatStore {
  constructor() {
    this.state = { user: null }

    this.bindListeners({
      login: Actions.LOGIN
    })
  }

  login(user) {
    this.setState({ user: user })
  }
}

export default alt.createStore(ChatStore)
