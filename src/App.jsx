import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';

// Calling API
import getDataFromApi from './utils/api';

// Pages
import Home from './pages/Home/Home'
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import SearchResultPage from './pages/search_result_page/SearchResultPage';

// Related Components
import Header from "./components/layouts/Header";
import Footer from './components/layouts/Footer';

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchApiConfig()
  }, [])

  const fetchApiConfig = async () => {
    getDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop_w1280: res?.images?.secure_base_url + "w1280",
        backdrop_w780: res?.images?.secure_base_url + "w780",
        backdrop_w300: res?.images?.secure_base_url + "w300",
        poster: res?.images?.secure_base_url + "w342",
        profile: res?.images?.secure_base_url + "w185",
      };

      dispatch(getApiConfiguration(url))
    })
  }

  return (
    <>
      <BrowserRouter>
        <div className='flex flex-col justify-between min-h-screen'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:mediaType/:id" element={<Details />} />
            <Route path="/explore/:mediaType" element={<Explore />} />
            <Route path="/search/:query" element={<SearchResultPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
