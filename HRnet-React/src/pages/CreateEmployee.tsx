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
      <section className="flex min-h-[calc(100vh-12rem)] w-full flex-col items-center gap-y-16 text-neutral-900 ">
        <h2 className="text-3xl text-gray-700">Add Employee</h2>

        <form className="flex flex-row justify-between gap-x-16">
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
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
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
