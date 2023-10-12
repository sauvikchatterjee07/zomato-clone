import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Body from "./Components/Body";
import Cart from "./Components/Cart";
import ContactUs from "./Components/ContactUs";
import ErrorPage from "./Components/ErrorPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/Store";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurantmenu/:resid",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
