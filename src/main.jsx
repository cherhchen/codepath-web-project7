import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import Sidebar from './routes/Sidebar.jsx'
import CreateCrewmate from './routes/CreateCrewmate.jsx'
import Gallery from './routes/Gallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar/>}>
          <Route index={true} element={<App/>}/>
          <Route index={false} path="/create" element={<CreateCrewmate/>}/>
          <Route index={false} path="/gallery" element={<Gallery/>}/>
          <Route index={false} path="/:id/edit" element={<EditCrewmate/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
