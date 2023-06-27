import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeRouter from './routes/HomeRouter';
import News from './components/additional/News';
import About from './components/additional/About';
import Teams from './components/additional/Teams';
import NewItem from './components/additional/NewItem';
import Coaches from './components/additional/Coaches';
import Records from './components/additional/Records';
import Athletes from './components/additional/Athletes';
import Branches from './components/additional/Branches';
import RecordItem from './components/additional/RecordItem';
import ContactModal from './components/modals/ContactModal';
import Departments from './components/additional/Departments';
import { QueryClient, QueryClientProvider } from 'react-query';
import Competetions from './components/additional/Competetions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  // react-query options

  const queryClient = new QueryClient();

  // contact modal options

  const [showContactModal, setShowContactModal] = useState(false);

  function changeContactModal() {
    setShowContactModal(!showContactModal);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar changeContactModal={changeContactModal} />
        <Routes>
          <Route exact path='/' element={<HomeRouter />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/:id' element={<NewItem />} />
          <Route path='/athletes' element={<Athletes />} />
          <Route path='/coaches' element={<Coaches />} />
          <Route path='/competetions' element={<Competetions />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/branches' element={<Branches />} />
          <Route path='/departments' element={<Departments />} />
          <Route path='/records' element={<Records />} />
          <Route path='/records/:id' element={<RecordItem />} />
        </Routes>
        <Footer />
        {showContactModal &&
          <ContactModal changeContactModal={changeContactModal} />
        }
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
