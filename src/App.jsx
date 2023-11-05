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
    </>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
