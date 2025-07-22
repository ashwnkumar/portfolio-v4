import { createBrowserRouter } from "react-router-dom";
import ProjectDetails from "../pages/ProjectDetails";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Home from "../pages/Home";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // Better than `path: "/"` under a parent
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:projectId", element: <ProjectDetails /> },
    ],
  },
]);
