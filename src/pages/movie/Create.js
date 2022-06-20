import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Hero from "../../components/Hero/Hero";

function CreateMovie() {
  // Tidak perlu props movies (props drilling)
  return (
    <>
      <Hero />
      <AddMovieForm />
    </>
  );
}

export default CreateMovie;
