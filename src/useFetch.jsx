import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const run = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");
      const headers = { "Content-Type": "application/json" };
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  const storedToken = localStorage.getItem("adminToken");
  if (storedToken) {
    run();
  }
}, [url]);


  return { data, loading, error, refetch: run };
};

export default useFetch;
