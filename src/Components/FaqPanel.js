import React, { Component } from 'react'
import { ipcRenderer } from 'electron'

class FaqPanel extends Component {

  openInfo = (info) => {
    ipcRenderer.send('show-more-info', info)
  }

  render() {
    const { faqData } = this.props
    return faqData.map((info, key) => {
      return (
        <div>
          <button key={key} onClick={() => { this.openInfo(info) }}>
            <pre style={{ margin: 5, fontSize: 20, fontFamily: 'Helvatica' }}>{info.question}</pre>
          </button>
        </div>
      )
    })
  }
}

export default FaqPanel