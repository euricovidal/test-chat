import React from 'react'
import { ListItem } from 'material-ui'

class Channel extends React.Component {
  render() {
    let item_style = {}

    if(this.props.channel.selected) {
      item_style.backgroundColor = '#f0f0f0'
    }

    return(
      <ListItem
       style={ item_style }
       key={ this.props.channel.key }>
        { this.props.channel.name }
      </ListItem>
    )
  }
}

export default Channel
