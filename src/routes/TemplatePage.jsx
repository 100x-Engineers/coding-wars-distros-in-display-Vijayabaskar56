import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const TemplatePage = () => {
  return (
    <>
      <div className="flex gap-2">
        <Navigation />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default TemplatePage;
