import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./routes/HomePage";
import TemplatePage from "./routes/TemplatePage";
import ErrorPage from "./routes/ErrorPage";
import StepOne from "./routes/StepOne";
import StepTwo from "./routes/StepTwo";
import StepThree from "./routes/StemThree";
import StepFour from "./routes/StepFour";
import StepFive from "./routes/StepFive";
// import Root, { loader as rootLoader } from "./routes/root";
import { useContext, createContext, useState } from "react";
import { Result } from "postcss";

export const detailContext = createContext({
  details: [],
  getProfessionalDetails: () => {},
  getEducationalDetails: () => {},
  getContactDetails: () => {},
  userPreference: () => {},
});

const [details, setDetails] = useState([]);

const getProfessionalDetails = (tweet) => {
  // Implement your logic here to update details with professional data
  // e.g., setDetails([...details, professionalData]);
};

const getEducationalDetails = (id, tweet) => {
  // Implement your logic here to update details with educational data
  // e.g., setDetails([...details, educationalData]);
};

const getContactDetails = (id, tweet) => {
  // Implement your logic here to update details with contact data
  // e.g., setDetails([...details, contactData]);
};

const userPreference = () => {
  // Implement your logic here to handle user preferences
};

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
      <Route path="template" element={<TemplatePage />}>
        <Route path="1" element={<StepOne />}></Route>
        <Route path="2" element={<StepTwo />}></Route>
        <Route path="3" element={<StepThree />}></Route>
        <Route path="4" element={<StepFour />}></Route>
        <Route path="5" element={<StepFive />}></Route>
      </Route>
      <Route poth="result" element={<Result />}></Route>
    </>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
