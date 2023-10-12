import Header from "../components/Header";
import Footer from "../components/Footer";
import bannerImage from "../assets/banner.jpg";

/**
 * Creates and renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <section className="flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center gap-y-16 py-4 text-neutral-900 sm:gap-y-6 sm:py-2 lg:gap-y-10">
        <img
          className="h-full max-h-[50vh] object-scale-down"
          src={bannerImage}
          alt="Banner Image"
        />
        <h2 className="text-center text-7xl font-bold sm:mt-2 sm:text-3xl lg:text-5xl">
          Welcome to HRNet
        </h2>
        <p className="text-center text-4xl sm:mt-1 sm:text-xl lg:text-2xl">
          Your one-stop solution for managing employees.
        </p>
      </section>
      <Footer />
    </div>
  );
}
