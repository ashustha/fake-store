import { useState, useEffect } from 'react';
import axios from 'axios';

function useAddToCart(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function addToCart() {
      setLoading(true);
      try {
        await axios.post(url, data);
        setSuccess(true);
      } catch (error) {
        setError(error);
      } 
      setLoading(false);
    }
    if (data) {
      addToCart();
    }
  }, [data, url]);

  function addItem(item) {
    setData(item);
    setSuccess(false)
  }

  return [error, loading, success, addItem];
}


export default useAddToCart
