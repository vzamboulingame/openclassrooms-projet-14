import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Creates and renders the CreateEmployee component.
 *
 * @return {JSX.Element} The rendered CreateEmployee component.
 */
export default function CreateEmployee(): JSX.Element {
  return (
    <div>
      <Header />
      <section className="flex min-h-[calc(100vh-12rem)] flex-col items-center text-neutral-900 ">
        <h1>CreateEmployee</h1>
      </section>
      <Footer />
    </div>
  );
}
