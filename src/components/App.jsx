import React     from 'react'
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
  render() {
    return(
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div>
          <AppBar title="Awesome Chat App" />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
