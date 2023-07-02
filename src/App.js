import React from 'react'
import './App.css'

import { Blog, Footer, Features, Header, Possibility, What} from './containers';
import { Cta, Brand, Navbar} from './components';

const App = () => {
  return (
    <div>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <What />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App
