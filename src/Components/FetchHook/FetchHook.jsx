import React from "react";
import { useFetch } from "./useFetch";

const FetchHook = () => {
  const { data, loading } = useFetch("https://dummyjson.com/products/1");
  return (
    <div>
      {loading && <b>LOADING...</b>}
      {data && <b>{data.title}</b>}
    </div>
  );
};

export default FetchHook;
