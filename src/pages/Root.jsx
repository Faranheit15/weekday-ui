import { RouterProvider } from "react-router-dom";
import appRouter from "@/routes/index";
import AppBar from "@/layout/AppBar";
import "./Root.css";

const Root = () => {
  return (
    <>
      <div className="app-bar">
        <AppBar />
      </div>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Root;
