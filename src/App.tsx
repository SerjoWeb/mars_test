import { twMerge } from "tailwind-merge";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Auth } from "./components/auth/Auth";
import { Signin } from "./components/auth/Signin";
import { Signup } from "./components/auth/Signup";
import { ForgotPassword } from "./components/auth/ForgotPassword";
import { EmailConfirmation } from "./components/auth/EmailConfirmation";
import { Main } from "./pages/Main";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth children={<Signin />} />,
    },
    {
      path: "/signup",
      element: <Auth children={<Signup />} />,
    },
    {
      path: "/forgot-password",
      element: <Auth children={<ForgotPassword />} />,
    },
    {
      path: "/email-confirmation",
      element: <Auth children={<EmailConfirmation />} />,
    },
    {
      path: "/app",
      element: <Main />,
    },
  ]);

  return (
    <main
      className={twMerge(
        `
        h-screen w-full flex justify-center items-center 
        bg-mars-pattern bg-cover bg-no-repeat bg-center
        `
      )}
    >
      <Toaster />
      <RouterProvider router={router} />
    </main>
  ); 
};
