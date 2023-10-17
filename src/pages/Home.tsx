import Header from "../components/Header";
import Footer from "../components/Footer";
import bannerJpg from "../assets/images/banner.jpg";
import bannerWebp from "../assets/images/banner.webp";
import bannerSmallWebp from "../assets/images/banner-small.webp";

/**
 * Creates and renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <section className="flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center gap-y-12 text-neutral-900 xl:gap-y-10 md:gap-y-8 sm:gap-y-4">
        <picture>
          <source
            srcSet={bannerSmallWebp}
            type="image/webp"
            media="(max-width: 768px)"
          />
          <source srcSet={bannerWebp} type="image/webp" />
          <img
            className="h-full max-h-[60vh] w-full object-scale-down"
            src={bannerJpg}
            alt="Banner Image"
          />
        </picture>

        <h1 className="text-center text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl">
          Welcome to HRNet
        </h1>

        <h2 className="text-center text-4xl lg:text-3xl md:text-2xl sm:text-xl">
          Your one-stop solution for managing employees.
        </h2>
      </section>
      <Footer />
    </div>
  );
}
