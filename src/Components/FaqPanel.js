import React, { Component } from 'react'
const { ipcRenderer } = window.require('electron')

class FaqPanel extends Component {
  openInfo = info => {
    ipcRenderer.send('show-more-info', info)
  }

  render () {
    const { faqData } = this.props
    return faqData.map((info, key) => {
      return (
        <div>
          <button style={{ border: 'none', backgroundColor: 'transparent' }} key={key} onClick={() => {this.openInfo(info)}}>
            <pre style={{ margin: 5, fontSize: 20, fontFamily: 'Helvatica', color: 'white' }}>
              {info.question}
            </pre>
          </button>
        </div>
      )
    })
  }
}

export default FaqPanel
