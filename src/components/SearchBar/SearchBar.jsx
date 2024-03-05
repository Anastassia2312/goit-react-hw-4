import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { IoSearchOutline } from "react-icons/io5";
export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;
    if (topic.trim() === "") {
      toast.error("You should enter a search term!", {
        position: "top-center",
      });
      return;
    }
    onSearch(topic);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          <IoSearchOutline size="20px" />
        </button>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
        />
        <Toaster />
      </form>
    </header>
  );
}
