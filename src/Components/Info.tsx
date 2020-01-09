import React, { Component } from 'react'
import { FaqInfo } from './FaqPanel'

const { ipcRenderer } = window.require('electron')

interface FaqInfoState { detail: { question: string, answer: Array<string> } }

class Info extends Component<FaqInfo, FaqInfoState> {

  constructor(props: FaqInfo) {
    super(props)
    this.state = {
      detail: {
        question: '',
        answer: []
      }
    }
  }

  componentDidMount() {
    ipcRenderer.on('faq-detail', (event: any, detail: FaqInfo): void => {
      this.setState({ detail })
    })
  }

  render() {
    const { detail } = this.state
    return (
      <div style={{ padding: 20 }}>
        <h2>{detail.question}</h2>
        <hr />
        {detail.answer && detail.answer.map((ans: String) => <p>{ans}</p>)}
      </div>
    )
  }
}

export default Info
