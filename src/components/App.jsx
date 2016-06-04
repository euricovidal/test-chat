import React       from 'react'
import MessageList from './MessageList.jsx'
import ChannelList from './ChannelList.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar } from 'material-ui'
import { blue100, blue500, blue700, pink400 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: blue100,
    accent1Color:  pink400
  }
})

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    var box_style = {
      display:  'flex',
      flexFlow: 'row wrap',
      maxWidth: 1280,
      width:    '100%',
      margin:   '30px auto 30px'
    }

    return(
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div>
          <AppBar title="Awesome Chat App" />
          <div style={ box_style }>
            <ChannelList />
            <MessageList />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
