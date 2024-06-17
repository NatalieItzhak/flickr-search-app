import React from "react";
import PhotoItem from "./PhotoItem";
import "./PhotoList.css";

function PhotoList({ photos }) {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoItem key={photo.link} photo={photo} />
      ))}
    </div>
  );
}

export default PhotoList;
