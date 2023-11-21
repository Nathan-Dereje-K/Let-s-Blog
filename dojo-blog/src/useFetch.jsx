import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCount = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCount.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data!");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 100);
    return () => abortCount.abort();
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;
