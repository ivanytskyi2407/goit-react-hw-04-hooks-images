import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import { useState, useEffect } from 'react';

const ImageGallery = ({ pictures }) => {
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setShowModal(false);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleModal = largeImageURL => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const closeModal = e => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem pictures={pictures} showModal={handleModal} />
      <Modal
        showModal={showModal}
        bigPicture={largeImageURL}
        closeModal={closeModal}
      />
    </ul>
  );
};
export default ImageGallery;
