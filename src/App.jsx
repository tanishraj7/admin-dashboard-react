import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { useState } from 'react'
function App() {
  const [sidebarState , setsidebarState]= useState(false);

  const OpenSideBar=()=>{
    setsidebarState(!sidebarState)
  }
  return (
    <div className='grid-container'>
      <Header openSidebar={OpenSideBar}/>
      <Sidebar openSidebar={OpenSideBar} isSidebar={sidebarState}/>
      <Main/>
    </div>
  )
}

export default App
