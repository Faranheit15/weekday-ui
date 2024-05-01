import { RouterProvider } from "react-router-dom";
import appRouter from "@/routes/index";

const Root = () => {
  return <RouterProvider router={appRouter} />;
};

export default Root;
