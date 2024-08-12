import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="grid h-screen place-content-center bg-[#424242] px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">404</h1>

          <p className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">We cant find that page.</p>

          <Link
            to="/"
            className="mt-6 inline-block rounded bg-yellow-400 px-5 py-3 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
