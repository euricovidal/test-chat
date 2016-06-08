import React        from 'react'
import { ListItem } from 'material-ui'
import Actions      from '../actions'

class Channel extends React.Component {
  constructor(props) {
    super(props)
  }
  //onClick() {
    //Actions.channelOpened(this.props.channel)
  //}
  render() {
    let item_style = {}
    if(this.props.channel.selected) {
      item_style.backgroundColor = '#f0f0f0'
    }

    return(
      <ListItem
       href={ '/#/chat/' + this.props.channel.key  }
       style={ item_style }
       key={ this.props.channel.key }>
        { this.props.channel.name }
      </ListItem>
    )
  }
}

export default Channel
