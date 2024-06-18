import React from "react";
import "./PhotoItem.css";

const PhotoItem = ({ photo }) => {
  const { link, media, title, author, date_taken, tags } = photo;

  return (
    <div className="photo-item">
      <a href={media.m} target="_blank" rel="noopener noreferrer">
        <img src={media.m} alt={title} />
      </a>
      <div>
        <h4>{title}</h4>
        <p>
          <strong>Author:</strong> {author}
        </p>
        <p>
          <strong>Date Taken:</strong> {new Date(date_taken).toLocaleString()}
        </p>
        <div className="tags">
          <strong>Tags:</strong>
          <p className="tags-truncate">{tags}</p>
        </div>
        <div className="link">
          <a href={link} className="original-link" target="_blank" rel="">
            View Full Size
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoItem;
