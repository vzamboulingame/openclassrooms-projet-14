import { Link, NavLink } from "react-router-dom";

/**
 * Creates and renders the Header component.
 *
 * @return {JSX.Element} The rendered Header component.
 */
export default function Header(): JSX.Element {
  return (
    <header className="flex h-24 items-center justify-between px-16 py-4 text-neutral-900">
      <Link
        className="flex items-center justify-between gap-4 transition duration-150 hover:text-blue-500"
        to="/"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <h1 className="text-2xl font-bold">HRNet</h1>
      </Link>

      <nav className="flex justify-between gap-8 text-xl">
        <NavLink
          className="transition duration-150 hover:text-blue-500 hover:underline"
          to="/employee/list"
        >
          Employee list
        </NavLink>

        <NavLink
          className="transition duration-150 hover:text-blue-500 hover:underline"
          to="/employee/create"
        >
          Add employee
        </NavLink>
      </nav>
    </header>
  );
}
