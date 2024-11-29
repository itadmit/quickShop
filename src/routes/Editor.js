import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { useEffect, useState } from "react";
import { config } from '../config/puckConfig';
import { getStoreId } from '../utils/urlParams';

export function Editor() {
  const [data, setData] = useState(undefined);
  const storeId = getStoreId();

  useEffect(() => {
    if (!storeId) {
      console.error('No store ID provided');
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
      });
  }, [storeId]);

  const save = (data) => {
    if (!storeId) {
      console.error('No store ID provided');
      return;
    }

    fetch("https://quick-shop.co.il/api/save_page.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        store_id: storeId,
        layout: JSON.stringify(data),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (!storeId) {
    return <div>Store ID is required</div>;
  }

  return data ? <Puck config={config} data={data} onPublish={save} /> : null;
}