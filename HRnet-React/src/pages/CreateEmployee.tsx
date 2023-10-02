import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEmployeeStore } from "../utils/store";
import { EmployeeData } from "../types/interfaces";

/**
 * Creates and renders the CreateEmployee component.
 *
 * @return {JSX.Element} The rendered CreateEmployee component.
 */
export default function CreateEmployee(): JSX.Element {
  const { addEmployeeData } = useEmployeeStore();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    if (form.checkValidity()) {
      const formData: EmployeeData = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        dateOfBirth: form.dateOfBirth.value,
        street: form.street.value,
        city: form.city.value,
        state: form.state.value,
        zipCode: form.zipCode.value,
        department: form.department.value,
        startDate: form.startDate.value,
      };

      // Store the employee data to the employeeDataArray
      addEmployeeData(formData);

      // Clear the form after adding data to the employeeDataArray
      form.reset();
    }
  }

  return (
    <div>
      <Header />
      <section className="flex min-h-[calc(100vh-12rem)] w-full flex-col items-center gap-y-16 text-neutral-900 ">
        <h2 className="text-3xl text-gray-700">Add Employee</h2>

        <form
          className="flex flex-row justify-between gap-x-16"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-y-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700">
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                minLength={2}
                pattern="(?!^ +$)^.+$"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="block text-gray-700">
                Date of birth
              </label>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="street" className="block text-gray-700">
                Street
              </label>
              <input
                id="street"
                name="street"
                type="text"
                minLength={2}
                pattern="(?!^ +$)^.+$"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-gray-700">
                State
              </label>
              <select
                name="state"
                id="state"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Connecticut</option>
                <option>Delaware</option>
                <option>District Of Columbia</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Hawaii</option>
                <option>Idaho</option>
                <option>Illinois</option>
                <option>Indiana</option>
                <option>Iowa</option>
                <option>Kansas</option>
                <option>Kentucky</option>
                <option>Louisiana</option>
                <option>Maine</option>
                <option>Maryland</option>
                <option>Massachusetts</option>
                <option>Michigan</option>
                <option>Minnesota</option>
                <option>Mississippi</option>
                <option>Missouri</option>
                <option>Montana</option>
                <option>Nebraska</option>
                <option>Nevada</option>
                <option>New Hampshire</option>
                <option>New Jersey</option>
                <option>New Mexico</option>
                <option>New York</option>
                <option>North Carolina</option>
                <option>North Dakota</option>
                <option>Ohio</option>
                <option>Oklahoma</option>
                <option>Oregon</option>
                <option>Pennsylvania</option>
                <option>Rhode Island</option>
                <option>South Carolina</option>
                <option>South Dakota</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Utah</option>
                <option>Vermont</option>
                <option>Virginia</option>
                <option>Washington</option>
                <option>West Virginia</option>
                <option>Wisconsin</option>
                <option>Wyoming</option>
              </select>
            </div>

            <div>
              <label htmlFor="department" className="block text-gray-700">
                Department
              </label>
              <select
                id="department"
                name="department"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <div>
              <label htmlFor="lastName" className="block text-gray-700">
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                minLength={2}
                pattern="(?!^ +$)^.+$"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="startDate" className="block text-gray-700">
                Start date
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-gray-700">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                minLength={2}
                pattern="(?!^ +$)^.+$"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="zipCode" className="block text-gray-700">
                Zip Code
              </label>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                minLength={2}
                pattern="(?!^ +$)^.+$"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="mt-4 rounded bg-blue-500 px-4 py-4 font-bold text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}
