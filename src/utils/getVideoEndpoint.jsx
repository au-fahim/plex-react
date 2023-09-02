import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import getDataFromApi from "./api";


export const getVideoEndpoint = (id, mediaType) => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   getDataFromApi(`/${mediaType}/${id}/videos`).then((res) => {
  //     setData(res)
  //   });
  // })
  // const officialVideo = data?.results?.find(
  //   (result) => result.type === "Trailer"
  // );

  console.log("hello");
  return { data };
};
