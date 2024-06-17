import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import PhotoList from "./components/PhotoList";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleFetchSuccess = useCallback((data) => {
    setPhotos(data.items);
  }, []);

  useEffect(() => {
    window.onFetchSuccess = handleFetchSuccess;

    if (query) {
      const script = document.createElement("script");
      script.src = `https://www.flickr.com/services/feeds/photos_public.gne?tags=${query}&format=json&jsoncallback=onFetchSuccess`;
      document.body.appendChild(script);

      // Cleanup function to remove the script
      return () => {
        document.body.removeChild(script);
      };
    } else {
      // Clear photos if query is empty
      setPhotos([]);
    }
  }, [query, handleFetchSuccess]);

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      <PhotoList photos={photos} />
    </div>
  );
};

export default App;
