import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, onModalOpen }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard image={item} onClick={() => onModalOpen(item)} />
        </li>
      ))}
    </ul>
  );
}
