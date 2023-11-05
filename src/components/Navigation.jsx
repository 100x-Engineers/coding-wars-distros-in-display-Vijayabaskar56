import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div id="sidebar" className="flex gap-2">
        <div className="w-56 bg-gray-900 border-fuchsia-50 p-4 flex flex-col">
          <h1 className="text-sm font-medium flex items-cente text-white border-t border-gray-300 p-4">
            Zeros & Once
          </h1>
          <nav>
            <ul className="w-full h-full gap-20 flex flex-col justify-evenly">
              <li className="w-full bg-white">
                <Link
                  to="1"
                  className="text-blue-500 px-3 py-10  w-full rounded"
                >
                  Professional Details
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link
                  to="2"
                  className="text-blue-500 px-3 py-10  w-full rounded"
                >
                  Educational Details
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link
                  to="3"
                  className="text-blue-500 px-3 py-10  w-full rounded"
                >
                  Skills Details
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link
                  to="4"
                  className="text-blue-500 px-3 py-10  w-full rounded"
                >
                  Contact Info
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link
                  to="5"
                  className="text-blue-500 px-3 py-1  w-full rounded"
                >
                  Template Customization
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Navigation;