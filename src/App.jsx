import './App.css'
import Hero from './components/Hero/Hero'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Questions from './components/Questions/Questions'
import { QuizProvider } from './components/Hooks/QuizProvider'
import Results from './components/Results/Results'

function App() {


  return (
    <>
      <QuizProvider>
        <Router>
            <Routes>
              <Route path="/" element={<Hero />}/>
              <Route path="/questions" element={<Questions />}/>
              <Route path='/results' element={<Results/>}/>
            </Routes>
        </Router>
      </QuizProvider>
    </>
  )
}

export default App
