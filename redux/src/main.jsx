import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.jsx'
import { store2 } from './reduxtoolkit/store_rtk.jsx'
import { store_3 } from './redux_toolkit/Storee.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store_3}>
    <App />
  </Provider>
  </StrictMode>,
)
