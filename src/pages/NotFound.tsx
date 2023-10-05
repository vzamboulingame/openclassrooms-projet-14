import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import errorImg from "../assets/error.jpg";

/**
 * Creates and renders the NotFound component.
 *
 * @return {JSX.Element} The rendered NotFound component.
 */
export default function NotFound(): JSX.Element {
  return (
    <div>
      <Header />
      <section className="flex min-h-[calc(100vh-12rem)] flex-col items-center text-neutral-900 ">
        <img
          className="h-full max-h-[60vh] object-scale-down"
          src={errorImg}
          alt="404 Error Image"
        />
        <p className="text-center text-7xl">Page not found !</p>
        <Link
          className="mt-16 text-3xl transition duration-150 hover:text-blue-500 hover:underline"
          to="/"
        >
          Back to homepage
        </Link>
      </section>
      <Footer />
    </div>
  );
}
