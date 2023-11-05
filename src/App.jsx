import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./routes/HomePage";
import TemplatePage from "./routes/TemplatePage";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="template" element={<TemplatePage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
