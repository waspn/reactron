import React, { Component } from 'react'
const { ipcRenderer } = window.require('electron')

export interface FaqPanelProps { faqData: Array<Object> }
export interface FaqInfo { question: string, answer: Array<string> }

class FaqPanel extends Component<FaqPanelProps, {}> {

  openInfo = (info: FaqInfo): void => {
    ipcRenderer.send('show-more-info', info)
  }

  render() {
    const { faqData } = this.props
    return faqData.map((info: FaqInfo, key: number) => {
      return (
        <div>
          <button
            style={{ border: 'none', backgroundColor: 'transparent' }}
            key={key}
            onClick={() => { this.openInfo(info) }}
          >
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
