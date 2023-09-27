import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Creates and renders the EmployeeList component.
 *
 * @return {JSX.Element} The rendered EmployeeList component.
 */
export default function EmployeeList(): JSX.Element {
  return (
    <div>
      <Header />
      <section className="flex min-h-[calc(100vh-12rem)] flex-col items-center text-neutral-900 ">
        <h1>EmployeeList</h1>
      </section>
      <Footer />
    </div>
  );
}
