import { createBrowserRouter } from "react-router-dom";
import About from "@/pages/about/About";
import JobPage from "@/pages/jobPage/JobPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <JobPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default appRouter;
