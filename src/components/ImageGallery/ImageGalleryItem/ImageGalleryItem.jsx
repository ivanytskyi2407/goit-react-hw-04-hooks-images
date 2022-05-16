import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ pictures, showModal }) {
  return pictures.map(({ id, webformatURL, tags, largeImageURL }) => {
    return (
      <li key={id} className={s.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          className={s.ImageGalleryItemImage}
          onClick={() => showModal(largeImageURL)}
        />
      </li>
    );
  });
}
