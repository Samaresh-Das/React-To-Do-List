import { useState, useCallback } from "react";

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const newRequest = useCallback(async (config, giveData) => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch(config.url, {
        method: config.method ? config.method : "GET",
        headers: config.headers ? config.headers : {},
        body: config.body ? JSON.stringify(config.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request Failed");
      }

      const data = await response.json();
      giveData(data);
    } catch (err) {
      setError(err.message || "Something Went Wrong");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    newRequest,
  };
};

export default useRequest;
