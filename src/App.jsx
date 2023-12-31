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
import ResultPage from "./routes/ResultPage";
// import Root, { loader as rootLoader } from "./routes/root";

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
      <Route path="/result" element={<ResultPage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
