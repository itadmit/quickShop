// src/utils/urlParams.js
export function getStoreId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('store_id');
  }