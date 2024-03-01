import toast, { Toaster } from "react-hot-toast";
export default function SearchBar() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;
    if (topic.trim() === "") {
      toast.error("You should enter a search term!", {
        position: "top-center",
      });
    }
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
}
