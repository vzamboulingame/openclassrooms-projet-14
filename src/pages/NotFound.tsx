import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import errorJpg from "../assets/images/error.jpg";
import errorWebp from "../assets/images/error.webp";
import errorSmallWebp from "../assets/images/error-small.webp";

/**
 * Creates and renders the NotFound component.
 *
 * @return {JSX.Element} The rendered NotFound component.
 */
export default function NotFound(): JSX.Element {
  return (
    <div>
      <Header />
      <section className="flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center gap-y-12 text-neutral-900 xl:gap-y-10 md:gap-y-8 sm:gap-y-4">
        <picture>
          <source
            srcSet={errorSmallWebp}
            type="image/webp"
            media="(max-width: 768px)"
          />
          <source srcSet={errorWebp} type="image/webp" />
          <img
            className="h-full max-h-[60vh] w-full object-scale-down"
            src={errorJpg}
            alt="404 Error Image"
          />
        </picture>

        <h1 className="text-center text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl">
          Page not found !
        </h1>

        <Link
          className="text-4xl transition duration-150 hover:text-blue-500 hover:underline lg:text-3xl md:text-2xl sm:text-xl"
          to="/"
        >
          Back to homepage
        </Link>
      </section>
      <Footer />
    </div>
  );
}
