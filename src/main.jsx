import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CharactersListPage from './pages/CharactersListPage.jsx'
import EpisodesListPage from './pages/EpisodesListPage/EpisodesListPage.jsx'
import EpisodeDetailsPage from './pages/EpisodeDetailsPage/EpisodeDetailsPage.jsx'
import CharacterCreate from './pages/CharacterCreate/CharacterCreate.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
    <BrowserRouter>
        <Routes>
          <Route path="" element={<CharactersListPage />}/>
          <Route path="episodes" element={<EpisodesListPage />}/>
          <Route path="episodes/:episodeId" element={<EpisodeDetailsPage />}/>
          <Route path="create-character" element={<CharacterCreate/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
