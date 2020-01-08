import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import FaqPanel from './Components/FaqPanel'

const faqData = {
  data: [
    {
      question: 'egrevsffefsefesf',
      answer: ['awwafegrereiul', 'yttyj65trtrt', 'ewgrebb wse']
    },
    {
      question: '7ikuruywe',
      answer: ['1204;ihoyrdrt', 'ewgrebb wse']
    },
    {
      question: '45mwszeszdasww',
      answer: ['po;,uyt5sre', '87yrxfxnjfr wse']
    }
  ]
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            FAQ - <code>Frequently Ask Question</code>
          </p>
          <FaqPanel faqData={faqData.data} />
        </header>
      </div>
    )
  }
}

export default App
