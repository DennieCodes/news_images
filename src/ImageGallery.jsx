// src/components/ImageGallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageGallery({ query }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiKey = process.env.PEXELS_API_KEY;
    const apiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;

    axios
      .get(apiUrl, {
        headers: {
          Authorization: apiKey,
        },
      })
      .then((response) => {
        console.log(response)
        setImages(response.data.photos);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, [query]);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-grid">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src.medium}
            alt={image.photographer}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
