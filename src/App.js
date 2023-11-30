import './App.css';
import { Route, Routes } from 'react-router-dom'
import Container from './components/main/Container';
import CreateAd from './components/Ads/CreateAd';
import MediaAd from './components/Ads/MediaAd';
import TextAd from './components/Ads/TextAd';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='dashboard' element={<Container />} />
        <Route path='createad' element={<CreateAd />} />
        <Route path='media-ad' element={<MediaAd />} />
        <Route path='text-ad' element={<TextAd />} />
      </Routes>
    </div>
  );
}

export default App;
