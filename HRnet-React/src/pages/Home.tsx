import Header from "../components/Header";
import Footer from "../components/Footer";
import bannerImage from "../assets/banner.jpg";

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <section className="flex min-h-[calc(100vh-12rem)] flex-col items-center text-neutral-900">
        <img
          className="h-full max-h-[60vh] object-scale-down"
          src={bannerImage}
          alt="Banner Image"
        />
        <h2 className="m-8 text-center text-7xl font-bold">Welcome to HRNet</h2>
        <p className="mt-8 text-center text-4xl">
          Your one-stop solution for managing employees.
        </p>
      </section>
      <Footer />
    </div>
  );
}
