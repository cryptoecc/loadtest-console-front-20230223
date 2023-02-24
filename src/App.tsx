import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SideBar from './components/SideBar'
import LoadTest from './components/loadTest'
import Status from './components/Status'
import TestSet from './components/TestSet'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path={'/'} element={<Navigate replace to="/loadtest" />} />
        <Route path={'/loadtest'} element={<LoadTest />} />
        <Route path={'/status'} element={<Status />} />
        <Route path={'/setting'} element={<TestSet />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
