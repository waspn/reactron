import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import FaqPanel from './Components/FaqPanel'

const logo = require('./logo.svg')

interface MainProps { data: Array<any> }
interface MainState { faqData: Array<any> }

class App extends Component<MainProps, MainState> {

  constructor (props: MainProps) {
    super(props)
    this.state = {
      faqData: []
    }
  }

  getFaqData = ():void => {
    axios.get('http://localhost:8765/faq')
    .then((res: any) => { this.setState({ faqData: res.data.data }) })
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
