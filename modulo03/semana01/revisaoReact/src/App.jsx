// import { HomePage } from './pages/home'
// import { HistoryPage } from './pages/history'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

import { Layout } from './template'

// import React from 'react'
// import NomeDoComponente from './pages/home'

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}
// JSX

export default App