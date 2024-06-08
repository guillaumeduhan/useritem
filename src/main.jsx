import React from 'react'
import ReactDOM from 'react-dom/client'
import UserItem from './UserItem.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserItem {...{  }} />
  </React.StrictMode>,
)
