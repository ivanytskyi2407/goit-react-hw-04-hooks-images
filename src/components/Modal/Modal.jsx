import s from './Modal.module.css';
export default function Modal({ bigPicture, closeModal, showModal }) {
  if (!showModal) {
    return;
  }
  return (
    <div className={s.Overlay} onClick={closeModal}>
      <div className={s.Modal}>
        <img src={bigPicture} alt="modal" />
      </div>
    </div>
  );
}
