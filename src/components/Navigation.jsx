import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div id="sidebar" className="flex gap-2">
        <div className="flex flex-col w-56 p-4 bg-gray-900 border-fuchsia-50">
          <h1 className="flex p-4 text-sm font-medium text-white border-t border-gray-300 items-cente">
            Zeros & Once
          </h1>
          <nav>
            <ul className="flex flex-col w-full h-full gap-20 justify-evenly">
              <li className="w-full bg-white">
                <Link
                  to="1"
                  className="w-full px-3 py-10 text-blue-500 rounded"
                >
                  Professional Details
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link
                  to="2"
                  className="w-full px-3 py-10 text-blue-500 rounded"
                >
                  Educational Details
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link
                  to="3"
                  className="w-full px-3 py-10 text-blue-500 rounded"
                >
                  Skills Details
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link
                  to="4"
                  className="w-full px-3 py-10 text-blue-500 rounded"
                >
                  Contact Info
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link to="5" className="w-full px-3 py-1 text-blue-500 rounded">
                  Template Customization
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* <div>
          <Outlet />
        </div> */}
      </div>
    </>
  );
};

export default Navigation;
