// src/App.js
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Editor } from './routes/Editor';
import { Home } from './routes/Home';
import { getStoreId } from './utils/urlParams';
import { useState, useEffect } from 'react';

export function App() {
  const [storeId, setStoreId] = useState(getStoreId() || '1'); // ברירת מחדל store_id=1

  useEffect(() => {
    // מעדכן את ה-URL אם אין store_id
    if (!getStoreId()) {
      const newUrl = new URL(window.location);
      newUrl.searchParams.set('store_id', storeId);
      window.history.pushState({}, '', newUrl);
    }
  }, []);

  return (
    <Router>
      <div>
        <nav className="nav">
          <Link to={`/editor?store_id=${storeId}`}>עורך</Link>
          <Link to={`/?store_id=${storeId}`}>תצוגה</Link>
        </nav>

        <Routes>
          <Route path="/editor" element={<Editor />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to={`/?store_id=${storeId}`} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;