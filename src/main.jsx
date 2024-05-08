import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CharactersListPage from './pages/CharactersListPage.jsx'
import EpisodesListPage from './pages/EpisodesListPage/EpisodesListPage.jsx'
// import EpisodePage from './pages/EpisodePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<CharactersListPage />}/>
         <Route path="episodes" element={<EpisodesListPage />}/>
        {/*<Route path="episodes/:episode" element={<EpisodePage />}/> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
