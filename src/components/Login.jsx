import React from 'react'
import { Card, CardText, RaisedButton } from 'material-ui'
import Actions from '../actions'

class Login extends React.Component {
  onClick() {
    Actions.login()
  }
  render() {
    var card_style = {
      maxWidth: '800px',
      margin:   '30px auto',
      padding:  '50px'
    }

    return (
        <Card style={ card_style }>
          <CardText style={ { textAlign: 'center' } }>
            To start chatting away, please log in with your Google account...
          </CardText>
          <RaisedButton
            style={ { display: 'block' } }
            onClick={ this.onClick.bind(this) }
            label="Log in with Google" />
        </Card>
    )
  }
}

export default Login
