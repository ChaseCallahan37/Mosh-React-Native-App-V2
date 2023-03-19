import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [progress, setProgress] = useState();

  const request = async (...args) => {
    setLoading(true);
    const result = await apiFunc(...args);
    setLoading(false);
    setProgress(null);
    if (!result.ok) {
      return setError(true);
    }
    setError(false);
    setData(result.data);
  };

  return { request, data, error, progress, loading };
};
