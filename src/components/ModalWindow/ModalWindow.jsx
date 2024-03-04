import Modal from "react-modal";

export default function ModalWindow({ image, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Image Modal">
      <div>
        {image && <img src={image.urls.regular} alt={image.description} />}
      </div>
    </Modal>
  );
}
