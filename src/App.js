import React, { Component } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import FaqPanel from './Components/FaqPanel'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      faqData: []
    }
  }

  getFaqData = () => {
    axios.get('http://localhost:8765/faq')
    .then(res => { this.setState({ faqData: res.data.data }) })
    .catch(err => {console.log('err', err)})
  }

  componentDidMount() {
    this.getFaqData()
  }

  render () {
    const { faqData } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            FAQ - <code>Frequently Ask Question</code>
          </p>
          {faqData.length && <FaqPanel faqData={faqData} />}
        </header>
      </div>
    )
  }
}

export default App
