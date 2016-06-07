import React     from 'react'
import Login     from './Login.jsx'
import Chat      from './Chat.jsx'
import ChatStore from '../stores/ChatStore.js'

// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar }       from 'material-ui'
import getMuiTheme      from 'material-ui/styles/getMuiTheme'
import { blue100, blue500, blue700, pink400 } from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: blue100,
    accent1Color:  pink400
  }
})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    ChatStore.getState()
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount() {
    ChatStore.listen(this.onChange)
  }
  componentWillMount() {
    ChatStore.unlisten(this.onChange)
  }
  onChange(state) {
    this.setState(state)
  }
  render() {
    return(
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div>
          <AppBar title="Awesome Chat App" />
          { this.state.user ? <Chat /> : <Login /> }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
