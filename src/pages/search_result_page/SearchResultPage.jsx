import { useParams } from 'react-router-dom';
import getDataFromApi from '../../utils/api';
import { useState } from 'react';
import { useEffect } from 'react';
import MainWrapper from '../../components/layouts/MainWrapper';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function SearchResultPage() {
  const { query } = useParams();
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const initialDataFetching = () => {
    setLoading(true)
    getDataFromApi(`/search/multi?query=${query}&page=${pageNumber}`).then((res) => {
      setData(res)
      setPageNumber(prev => prev++)
      setLoading(false)
    })
  }

  const fetchNextPageData = () => {
    getDataFromApi(`/search/multi?query=${query}&page=${pageNumber}`).then((res) => {
      if (data?.results) {
        setData({ ...data, results: [...data?.results, ...res?.results] });
      } else {
        setData(res)
      }
    })
  }

  useEffect(() => {
    initialDataFetching()
  }, [query])

  return (
    <section>
      <MainWrapper>
        <InfiniteScroll className="flex flex-nowrap gap-4">
          {}
        </InfiniteScroll>
      </MainWrapper>
    </section>
  )
}