import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'

import './App.scss'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App
