import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  	<Header >
		Caltrix
	</Header>
    <App />
	<Footer>
		Hello
	</Footer>
  </React.StrictMode>,
)
