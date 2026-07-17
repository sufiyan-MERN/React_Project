import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import App from "./src/App";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./src/components/Home";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
// import RestaurentPage from "./src/components/restaurantpage";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => {
  import("./src/components/Grocery");
});

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurantMenu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={AppRouter} />);
