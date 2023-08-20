import { useState } from "react"
import { getDataFromApi } from "../utils/api"
import { useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    setLoading("Thant You For Waiting :)")
    setData(null)
    setError(null)

    getDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setLoading("Something went Wrong!");
      });
  }, [url])

  return {data, error, loading}
}