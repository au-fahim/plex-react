import { useEffect, useRef, useState } from "react";
import getDataFromApi from "../../../utils/api";

import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router";

export default function SearchResult({ queryText, setShowSearchResultModal }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchInitialData = () => {
    setLoading(true);
    getDataFromApi(`/search/multi?query=${queryText}&page=${pageNumber}`).then(
      (res) => {
        setData(res);
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    getDataFromApi(`/search/multi?query=${queryText}&page=${pageNumber}`).then(
      (res) => {
        if (data?.results) {
          setData({ ...data, results: [...data?.results, ...res?.results] });
        } else {
          setData(res);
        }
      }
    );
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      fetchInitialData();
    }, 1000);

    return () => clearTimeout(getData);
  }, [queryText]);

  console.log(data);
  console.log(data?.results?.length);

  const topSearchBar = useRef();

  useEffect(() => {
    let dropDownHandler = (e) => {
      if (!topSearchBar.current.contains(e.target)) {
        setShowSearchResultModal(false);
      }
    };
    document.addEventListener("mousedown", dropDownHandler);

    return () => document.removeEventListener("mousedown", dropDownHandler);
  });

  return (
    <div
      ref={topSearchBar}
      className="absolute w-full bg-black/90 rounded-md top-10 duration-300 py-2 px-2 min-h-[200px] max-h-96 overflow-y-auto mb-2"
    >
      {!loading ? (
        <>
          {data?.results?.length > 0 ? (
            <>
              {data?.results?.map((item, index) => {
                return (
                  <div key={index} className="w-full py-2 px-2">
                    <h1>{item?.title || item?.name}</h1>
                  </div>
                );
              })}

              {/* Show All Search Result Button */}
              {data?.total_pages > 1 && (
                <button
                  className="btn_sm primary_btn w-full font-bold"
                  onClick={() => {
                    navigate(`/search/${queryText}`);
                    setShowSearchResultModal(false);
                  }}
                >
                  Show More ({data?.total_results - 20}+) Results
                </button>
              )}
            </>
          ) : (
            <div className="h-48 flex flex-col items-center justify-center">
              <h1>No Results Found</h1>
            </div>
          )}
        </>
      ) : (
        <div className="h-48 flex flex-col items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
