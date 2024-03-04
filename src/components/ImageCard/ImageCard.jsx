export default function ImageCard({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt={image.description} />
    </div>
  );
}
