import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeRouter from './routes/HomeRouter';
import News from './components/additional/News';
import About from './components/additional/About';
import NewItem from './components/additional/NewItem';
import Coaches from './components/additional/Coaches';
import Records from './components/additional/Records';
import Athletes from './components/additional/Athletes';
import RecordItem from './components/additional/RecordItem';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  // react-query options

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomeRouter />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/:id' element={<NewItem />} />
          <Route path='/athletes' element={<Athletes />} />
          <Route path='/coaches' element={<Coaches />} />
          <Route path='/records' element={<Records />} />
          <Route path='/records/:id' element={<RecordItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
