import React      from 'react'
import { render } from 'react-dom'
import App        from './components/App.jsx'

require('./main.scss')

render(<App />, document.getElementById('container'))
