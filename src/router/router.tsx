import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "mercury",
    element: <Root />,
  },
  {
    path: "venus",
    element: <Root />,
  },
  {
    path: "earth",
    element: <Root />,
  },
  {
    path: "mars",
    element: <Root />,
  },
  {
    path: "jupiter",
    element: <Root />,
  },
  {
    path: "saturn",
    element: <Root />,
  },
  {
    path: "uranus",
    element: <Root />,
  },
  {
    path: "neptune",
    element: <Root />,
  },
]);

export default router;
