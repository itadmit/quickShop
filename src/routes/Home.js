import { Render } from "@measured/puck";
import { useEffect, useState } from "react";
import { config } from '../config/puckConfig';
import { getStoreId } from '../utils/urlParams';

export function Home() {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);
  const storeId = getStoreId();

  useEffect(() => {
    if (!storeId) {
      setError('No store ID provided');
      return;
    }

    fetch(`https://quick-shop.co.il/api/get_page.php?store_id=${storeId}`)
      .then((response) => response.json())
      .then(({ data }) => {
        const d = JSON.parse(data.layout);
        setData({ ...d });
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
      });
  }, [storeId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!storeId) {
    return <div>Store ID is required</div>;
  }

  return data ? <Render config={config} data={data} /> : null;
}