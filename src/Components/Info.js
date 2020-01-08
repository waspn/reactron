import React, { Component } from 'react'
const { ipcRenderer } = window.require('electron')

class Info extends Component {
  constructor (props) {
    super(props)
    this.state = {
      detail: []
    }
  }

  componentDidMount () {
    ipcRenderer.on('faq-detail', (event, detail) => {
      this.setState({ detail })
    })
  }

  render () {
    console.log('DETAIL sTESAETAS', this.state.detail)
    const { detail } = this.state
    return (
      <div>
        <h3>{detail.question}</h3>
        <hr />
        {detail.answer && detail.answer.map(ans => <p>{ans}</p>)}
      </div>
    )
  }
}

export default Info
