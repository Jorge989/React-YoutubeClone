import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {NavigationBar,Feed, VideoDetail,ChannelDetail, SearchFeed} from './components';
const App = () => {
  return (
  <BrowserRouter>
  <Box sx={{backgroundColor: "#000"}}>
    <NavigationBar/>
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </Box>
  </BrowserRouter>
  )
}

export default App
