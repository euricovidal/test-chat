import React from 'react'
import { Card, CardText, RaisedButton } from 'material-ui'
import Actions from '../actions'
import { withRouter } from 'react-router'

class Login extends React.Component {
  //componentDidMount() {
    //this.props.router.setRouteLeaveHook(this.props.route, () => {
      //if (this.state.unsaved)
        //return 'You have unsaved information, are you sure you want to leave this page?'
    //})
  //}
  onClick() {
    Actions.login(this.props.router)
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
          secondary={ true }
          onClick={ this.onClick.bind(this) }
          label="Log in with Google" />
      </Card>
    )
  }
}

export default withRouter(Login)
