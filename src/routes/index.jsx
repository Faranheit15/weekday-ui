import { createBrowserRouter } from "react-router-dom";
import About from "@/pages/about/About";
import Jobs from "@/pages/jobPage/Jobs";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Jobs />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default appRouter;
