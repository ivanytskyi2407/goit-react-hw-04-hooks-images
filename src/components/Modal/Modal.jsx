import s from './Modal.module.css';
export default function Modal({ bigPicture, closeModal }) {
  return (
    <div className={s.Overlay} onClick={closeModal}>
      <div className={s.Modal}>
        <img src={bigPicture} alt="modal" />
      </div>
    </div>
  );
}
