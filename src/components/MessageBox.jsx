import React from 'react'
import { Card } from 'material-ui'

class MessageBox extends React.Component {
  render() {
    var card_style = {
      maxWidth: 1280,
      margin: '30px auto',
      padding: 30
    }
    var textarea_style = {
      width: '100%',
      borderColor: '#D0D0D0',
      resize: 'none',
      borderRadius: 3,
      minHeight: 50,
      color: '#555',
      fontSize: 14,
      outline: 'auto 0px'
    }

    return(
      <Card style={ card_style }>
        <textarea style={ textarea_style } />
      </Card>
    )
  }
}

export default MessageBox
