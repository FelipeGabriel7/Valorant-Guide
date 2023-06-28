import React from 'react'
import ReactDOM from 'react-dom/client'

import { store } from './reducers/store.js'
import { Provider } from 'react-redux'
import { Home } from './components/Home/index.jsx'
import { RoutesProject } from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutesProject/> 
    </Provider>
  </React.StrictMode>,
)
