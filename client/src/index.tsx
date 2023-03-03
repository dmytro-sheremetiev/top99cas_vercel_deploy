import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/";
import AboutPage from "./pages/AboutPage";
import TermsPage from "./pages/TermsPage";
import ContactUsPage from "./pages/ContactUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to="/" replace={true} />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
