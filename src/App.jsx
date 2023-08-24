import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { getApiConfiguration } from './store/homeSlice';
import getDataFromApi from './utils/api';
import Header from "./components/layouts/Header";
import Home from './pages/Home/Home'
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore';
import SearchResult from './pages/search_result/SearchResult';
import PageNotFound from './pages/404/PageNotFound';

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
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
