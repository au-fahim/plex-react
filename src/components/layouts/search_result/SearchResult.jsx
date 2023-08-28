import { useEffect, useRef, useState } from "react";
import getDataFromApi from "../../../utils/api";

import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

export default function SearchResult({ queryText, setShowSearchResultModal }) {
  const { url } = useSelector((state) => state.home)
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchInitialData = () => {
    setLoading(true);
    getDataFromApi(`/search/multi?query=${queryText}&page=${pageNumber}`).then(
      (res) => {
        setData(res);
        setPageNumber(prev => prev++)
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
    }, 500);

    return () => clearTimeout(getData);
  }, [queryText]);

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
      className="absolute w-full bg-black/95 rounded-md top-10 duration-300 py-2 px-2 min-h-[200px] mb-2 shadow-lg"
    >
      {!loading ? (
        <>
          {data?.results?.length > 0 ? (
            <>
              <InfiniteScroll
                dataLength={data?.results?.length}
                hasMore={pageNumber <= data?.total_pages}
                next={fetchNextPageData}
                height={400}
                loader={<Spinner />}
              >
                {data?.results?.map((item, index) => {
                  let releaseDate = item?.release_date || item?.first_air_date;

                  return (
                    <div
                      key={index}
                      className="w-full py-2 px-2 flex flex-row gap-3 items-center rounded-md transition duration-150 hover:bg-white/20"
                    >
                      <img
                        src={url?.poster + item?.poster_path}
                        alt={item?.title || item?.name}
                        className="rounded-md w-12"
                      />
                      <div className="flex flex-col gap-1">
                        <h1 className="line-clamp-1">
                          {item?.title || item?.name}
                        </h1>

                        <p className="text-gray-400">
                          <span>
                            {item?.media_type === "tv" ? "TV Show" : "Movie"}
                          </span>
                          <span> • </span>
                          <span>
                            {dayjs(releaseDate).format("D  MMM, YYYY")}
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </InfiniteScroll>

              {/* Show All Search Result Button */}
              {/* {data?.total_pages > 1 && (
                <button
                  className="btn_sm primary_btn w-full font-bold"
                  onClick={() => {
                    navigate(`/search/${queryText}`);
                    setShowSearchResultModal(false);
                  }}
                >
                  Show More ({data?.total_results - 20}+) Results
                </button>
              )} */}
            </>
          ) : (
            <div className="h-48 flex flex-col items-center justify-center">
              <h1>No Results Found</h1>
            </div>
          )}
        </>
      ) : (
        <div className="h-48 flex flex-col gap-4 items-center ">
          {/* <Spinner /> */}
          <div className="w-full">
            <Skeleton count={6} height={60} />
          </div>
        </div>
      )}
    </div>
  );
}
