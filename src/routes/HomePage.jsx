import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1 className="mt-8 text-4xl text-center">
        AI POWERED PORTFOLIO BUILDER
      </h1>
      <div className="flex justify-center mt-8">
        <div className="flex space-x-4">
          <div className="p-6 text-center border border-gray-300 rounded-lg">
            <Link to="/template">
              <h2 className="text-xl font-semibold">Professional</h2>
              <p className="mt-4 text-md">Professional portfolio template.</p>
            </Link>
          </div>
          <div className="p-6 text-center border border-gray-300 rounded-lg">
            <Link to="/template">
              <h2 className="text-xl font-semibold">Creative</h2>
              <p className="mt-4 text-md">Creative portfolio template.</p>
            </Link>
          </div>
          <div className="p-6 text-center border border-gray-300 rounded-lg">
            <Link to="/template">
              <h2 className="text-xl font-semibold">Academic</h2>
              <p className="mt-4 text-md">Academic portfolio template.</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
