import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

      const baseUrl = res?.images?.secure_base_url;
      const url = {
        backdrop_w1280: baseUrl + "w1280",
        backdrop_w780: baseUrl + "w780",
        backdrop_w300: baseUrl + "w300",
        poster: baseUrl + "w342",
        poster_w342: baseUrl + "w342",
        profile: baseUrl + "w185",
      };

      dispatch(getApiConfiguration(url))
    })
  }

  return (
    <>
      <BrowserRouter>
        <div className='overflow-hidden flex flex-col justify-between min-h-screen'>
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
