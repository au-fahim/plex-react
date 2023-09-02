import useFetch from "../../../hooks/useFetch";
import MainWrapper from "../../../components/layouts/MainWrapper";
import Spinner from "../../../components/ui/Spinner";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { HiPlay, HiStar } from "react-icons/hi2";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState } from "react";
import dayjs from "dayjs";

export default function DetaislBanner({ video, crew }) {
  const [showModal, setShowModal] = useState(false)
  const [videoId, setVideoId] = useState(null)

  const { url } = useSelector((state) => state.home)

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`)

  const directors = crew?.filter((person) => person.job === "Director");
  const writers = crew?.filter(
    (person) =>
      person.job === "Writer" ||
      person.job === "Story" ||
      person.job === "Screenplay"
  );


  const videoPosterPath = url?.poster_w342 + data?.poster_path;
  const videoBgPath = url?.backdrop_w1280 + data?.backdrop_path;

  const durationTime = () => {
    const hour = Math.floor(data?.runtime / 60);
    const minute = data?.runtime % 60

    return `${hour}h ${minute}m`
  }

  return (
    <>
      <section className="overflow-hidden pb-10 pt-16 relative bg-gradient-to-t from-[#191919] from-10% to-[#191919b0] md:bg-[radial-gradient(ellipse_at_top,_#191919b0,_#191919_60%)]">
        <MainWrapper>
          <div className="h-max lg:h-[560px] 2xl:h-[680px] overflow-hidden flex felx-col items-center">
            {/* SECTION WRAPPER */}
            <div className="w-full grid grid-cols-1 md:grid-cols-6 items-start xl:items-center gap-10 px-4 md:px-0">
              {/* LEFT SECTION */}
              <div className="mt-8 xl:mt-0 max-w-xs mx-auto md:col-span-2">
                {loading ? (
                  <div className="w-full h-full animate-pulse duration-0 delay-0">
                    <Skeleton height={520} baseColor="#5c5c5c" />
                  </div>
                ) : (
                  <img
                    src={videoPosterPath}
                    alt={data?.name || data?.title}
                    className="rounded-lg w-full shadow-lg"
                  />
                )}
              </div>

              {/* RIGHT SECTION */}
              <div className="md:col-span-4 flex flex-col gap-6 items-start">
                {loading ? (
                  <div className="w-4/5 animate-pulse duration-0 delay-0">
                    <Skeleton baseColor="#5c5c5c" height={40} />
                    <br />
                    <Skeleton baseColor="#5c5c5c" height={20} width={250} />
                  </div>
                ) : (
                  <div className="text-white flex flex-col gap-2">
                    <h1
                      className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold line-clamp-2 md:leading-loose"
                      title={data?.title || data?.name}
                    >
                      {data?.title || data?.name}
                    </h1>
                    <span className="text-gray-400 text-sm md:text-base lg:text-lg 2xl:text-xl">
                      {data?.tagline}
                    </span>
                  </div>
                )}

                <div className="flex flex-row flex-wrap gap-6 md:gap-10 items-center">
                  {loading ? (
                    <div className="w-20 animate-pulse">
                      <Skeleton baseColor="#5c5c5c" height={40} />
                    </div>
                  ) : (
                    <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 md:gap-4 rounded-lg text-base lg:text-xl">
                      <div className="py-2 px-2 rounded-full bg-black/60 text-yellow-500 text-xl md:text-2xl">
                        <HiStar />
                      </div>
                      <p>
                        <span className="font-bold">
                          {data?.vote_average.toFixed(1)}{" "}
                        </span>
                        <span className="text-gray-400">/10</span>
                      </p>
                    </div>
                  )}

                  {loading ? (
                    <div className="w-32 md:w-48 animate-pulse">
                      <Skeleton baseColor="#5c5c5c" height={40} />
                    </div>
                  ) : (
                    <button className="btn_md primary_btn flex flex-row items-center gap-2">
                      <HiPlay /> Watch Now
                    </button>
                  )}
                </div>

                <div className="w-full">
                  <h1 className="text-base mb-2 md:text-lg lg:text-2xl text-gray-100 font-bold">
                    Overview :
                  </h1>
                  {loading ? (
                    <div className="w-4/5 animate-pulse duration-0 delay-0">
                      <Skeleton baseColor="#5c5c5c" height={20} count={3} />
                    </div>
                  ) : (
                    <p
                      className="mb-2 text-gray-400 text-sm md:text-base lg:text-lg 2xl:text-xl line-clamp-3"
                      title={data?.overview}
                    >
                      {data?.overview}
                    </p>
                  )}
                </div>

                <div className="w-full text-base lg:text-lg">
                  <div className="flex flex-row gap-4 flex-wrap justify-between items-center border-gray-600 border-b py-4">
                    <p className="flex flex-row gap-2">
                      <strong className="text-white">Status : </strong>

                      {loading ? (
                        <div className="w-28 animate-pulse duration-0 delay-0">
                          <Skeleton baseColor="#5c5c5c" height={20} />
                        </div>
                      ) : (
                        <span className="text-gray-300">{data?.status}</span>
                      )}
                    </p>

                    {!!data?.release_date && (
                      <p className="flex flex-row gap-2">
                        <strong className="text-white">Release Date : </strong>

                        {loading ? (
                          <div className="w-28 animate-pulse">
                            <Skeleton baseColor="#5c5c5c" height={20} />
                          </div>
                        ) : (
                          <span className="text-gray-300">
                            {dayjs(data?.release_date).format("MMM DD, YYYY")}
                          </span>
                        )}
                      </p>
                    )}

                    {!!data?.first_air_date && (
                      <p className="flex flex-row gap-2">
                        <strong className="text-white">Release Date : </strong>

                        {loading ? (
                          <div className="w-28 animate-pulse">
                            <Skeleton baseColor="#5c5c5c" height={20} />
                          </div>
                        ) : (
                          <span className="text-gray-300">
                            {dayjs(data?.first_air_date).format("DD MMM, YYYY")}
                          </span>
                        )}
                      </p>
                    )}

                    {data?.runtime && (
                      <p className="flex flex-row gap-2 py-2 md:py-0">
                        <strong className="text-white">Duration :</strong>

                        {loading ? (
                          <div className="w-28 animate-pulse duration-0 delay-0">
                            <Skeleton baseColor="#5c5c5c" height={20} />
                          </div>
                        ) : (
                          <span className="text-gray-300">
                            {durationTime()}
                          </span>
                        )}
                      </p>
                    )}

                    {data?.number_of_episodes && (
                      <p className="flex flex-row gap-2 py-2 md:py-0">
                        <strong className="text-white">Total Episodes :</strong>

                        {loading ? (
                          <div className="w-28 animate-pulse duration-0 delay-0">
                            <Skeleton baseColor="#5c5c5c" height={20} />
                          </div>
                        ) : (
                          <span className="text-gray-300">
                            {data?.number_of_episodes}
                          </span>
                        )}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-row flex-wrap gap-4 py-4 border-b border-gray-600">
                    <strong className="text-white">
                      {directors?.length > 1 ? "Directors" : "Director"} :
                    </strong>

                    {loading ? (
                      <div className="w-36 animate-pulse duration-0 delay-0">
                        <Skeleton baseColor="#5c5c5c" height={20} />
                      </div>
                    ) : (
                      <>
                        {directors?.length > 0 ? (
                          <p>
                            {directors?.map((director, index) => (
                              <span key={index} className="text-gray-300">
                                {director.name}
                                {directors.length - 1 !== index && ", "}
                              </span>
                            ))}
                          </p>
                        ) : (
                          <p className="text-gray-300">No Data Availble</p>
                        )}
                      </>
                    )}
                  </div>

                  <div className="flex flex-row gap-4 py-4 flex-wrap">
                    <strong className="text-white">
                      {writers?.length > 1 ? "Writers" : "Writer"} :
                    </strong>

                    {loading ? (
                      <div className="w-36 animate-pulse duration-0 delay-0">
                        <Skeleton baseColor="#5c5c5c" height={20} />
                      </div>
                    ) : (
                      <>
                        {writers?.length > 0 ? (
                          <p>
                            {writers?.map((writer, index) => (
                              <span key={index} className="text-gray-300">
                                {writer.name}
                                {writers.length - 1 !== index && ", "}
                              </span>
                            ))}
                          </p>
                        ) : (
                          <p className="text-gray-300">No Data Availble</p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainWrapper>

        {!loading ? (
          <div
            className="w-full h-full absolute top-0 -z-30 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${videoBgPath})` }}
          />
        ) : (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        )}
      </section>
    </>
  );
}