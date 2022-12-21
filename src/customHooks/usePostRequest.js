import { useState, useEffect } from 'react';
import axios from 'axios';

function usePostRequest(url, data) {
  const [response, setResponse] = useState(null);
  const [cartError, setError] = useState(null);
  const [cartLoading, setLoading] = useState(false);

  useEffect(() => {
    async function postData() {
      setLoading(true);
      try {
        const res = await axios.post(url, data);
        setResponse(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    }

    if (data) {
      postData();
    }
  }, [data, url]);

  return [response, cartError, cartLoading];
}


export default usePostRequest
