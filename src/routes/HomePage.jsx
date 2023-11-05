const HomePage = () => {
  return (
    <>
      <div>
        <>
          <h1 className="text-center text-4xl mt-8">
            AI POWERED PORTFOLIO BUILDER
          </h1>
          <div className="flex justify-center mt-8">
            <div className="flex space-x-4">
              <div className="border border-gray-300 rounded-lg p-6 text-center">
                <h2 className="text-xl font-semibold">Professional</h2>
                <p className="text-md mt-4">Professional portfolio template.</p>
              </div>
              <div className="border border-gray-300 rounded-lg p-6 text-center">
                <h2 className="text-xl font-semibold">Creative</h2>
                <p className="text-md mt-4">Creative portfolio template.</p>
              </div>
              <div className="border border-gray-300 rounded-lg p-6 text-center">
                <h2 className="text-xl font-semibold">Academic</h2>
                <p className="text-md mt-4">Academic portfolio template.</p>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default HomePage;
