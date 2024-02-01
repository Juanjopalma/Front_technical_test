import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = ( url ) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const fetchData = ( url ) => {
      axios
          .get(url)
          .then((res) => {
              setResponse(res.data);
          })
          .catch((err) => {
              setError(err);
          })
  };

  useEffect(() => {
      fetchData(url);
  }, [url]);

  // custom hook returns value
  return { response, error };
};
