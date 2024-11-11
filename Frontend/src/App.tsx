import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <div className='h-screen flex flex-col dark:bg-slate-800'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
