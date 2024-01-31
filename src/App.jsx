import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {
  

  return (
    <>
      <div className="bg-slate-100 min-h-screen max-w-screen-lg mx-auto flex flex-col">
        <Header/>
        <main className="flex-1 p-6">
        <h2> This is the Homepage </h2>
        </main>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
