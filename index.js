import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

render(
    <div txt="hi" />,
    document.getElmeentById('root')
)
