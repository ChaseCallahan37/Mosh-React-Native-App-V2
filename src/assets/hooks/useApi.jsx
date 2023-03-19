import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [progress, setProgress] = useState();

  const request = (...args) => {
    setLoading(true);
    // const result = await apiFunc(...args);
    const result = { ok: true, data: ["hi", "there"] };
    setLoading(false);
    setProgress(null);
    console.log(result);
    if (!result.ok) {
      console.log(result.originalError);
      return setError(true);
    }
    setError(false);
    setData(result.data);
  };

  return { request, data, error, progress, loading };
};
