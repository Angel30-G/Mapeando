import React, { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "./ImageGallery.scss";

const MyImageGallery = (images: any) => {
  const [isClient, setIsClient] = useState(false);

  const galleryImages = images.images;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <ImageGallery
      items={galleryImages}
      showFullscreenButton={true}
      showPlayButton={true}
      infinite={true}
      additionalClass="gallery"
      showIndex={true}
    />
  );
};

export default MyImageGallery;
