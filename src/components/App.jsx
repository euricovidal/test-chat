import React       from 'react'
import MessageList from './MessageList.jsx'
import MessageBox  from './MessageBox.jsx'
import ChannelList from './ChannelList.jsx'
import Login       from './Login.jsx'
import ChatStore   from '../stores/ChatStore.js'

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
    var box_style = {
      display:  'flex',
      flexFlow: 'row wrap',
      maxWidth: 1280,
      width:    '100%',
      margin:   '30px auto 30px'
    }

    var view = <Login />

    if(this.state.user) {
      view = (
          <div>
            <div style={ box_style }>
              <ChannelList />
              <MessageList />
            </div>
            <MessageBox />
          </div>
      )
    }

    return(
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div>
          <AppBar title="Awesome Chat App" />
          { view }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
