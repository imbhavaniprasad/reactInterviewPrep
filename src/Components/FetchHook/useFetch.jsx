import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    let controller = new AbortController();

    setLoading(true);
    await fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, loading };
};
