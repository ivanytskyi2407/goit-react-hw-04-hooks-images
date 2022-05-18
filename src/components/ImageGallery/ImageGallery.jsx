import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import { Component } from 'react';
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
      {showModal && (
        <Modal bigPicture={largeImageURL} closeModal={closeModal} />
      )}
    </ul>
  );
};
export default ImageGallery;

// export default class ImageGallery extends Component {
//   state = {
//     showModal: false,
//     largeImageURL: null,
//   };
//   handleModal = largeImageURL => {
//     this.setState({
//       showModal: !this.state.showModal,
//       largeImageURL,
//     });
//   };

//   closeModal = e => {
//     if (e.target === e.currentTarget) {
//       this.setState({ showModal: false });
//     }
//   };
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }
//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.setState({ showModal: false });
//     }
//   };

//   render() {
//     return (
//       <ul className={s.ImageGallery}>
//         <ImageGalleryItem
//           pictures={this.props.pictures}
//           showModal={this.handleModal}
//         />
//         {this.state.showModal && (
//           <Modal
//             bigPicture={this.state.largeImageURL}
//             closeModal={this.closeModal}
//           />
//         )}
//       </ul>
//     );
//   }
// }
