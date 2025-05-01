import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPanel from './components/AdminPanel'
import FullscreenView from './components/FullscreenView'
import MobileQuiz from './components/MobileQuiz'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/view/:quizId" element={<FullscreenView />} />
        <Route path="/quiz/:quizId" element={<MobileQuiz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App