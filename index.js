import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginForm from "./component/LoginForm.jsx";
import SignupForm from "./component/SignupForm.jsx";
import App from "./App.jsx";
import Home from "./component/Home.jsx";
import ProductSellerForm from "./component/ProductSellerForm.jsx";
import Productdetail from "./component/Productdetail.jsx";
import SellPage from "./component/SellPage.jsx";
import FrontPage from "./component/FrontPage.jsx";
import CartPage from "./component/CartPage.jsx";
import CartProduct from "./component/CartProduct.jsx";
import About from "./component/About.jsx";
import { Provider } from "react-redux";
import store from "./reducers/Store.jsx";
import OurProducts from "./component/OurProducts.jsx";

const router1 = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <FrontPage /> },
      { path: "login", element: <LoginForm /> },
      { path: "signup", element: <SignupForm /> },
      { path: "ProductSeller", element: <ProductSellerForm /> },
      { path: "productdetail", element: <Productdetail /> },
      { path: "sell", element: <SellPage /> },
      { path: "frontpage", element: <Home /> },
      { path: "cart", element: <CartPage /> },
      { path: "about", element: <About /> },
      { path: "ourproduct", element: <OurProducts/>}
    ]
  },
]);


const r = createRoot(document.getElementById("root"));

r.render(  
  <Provider store={store}>
    <RouterProvider router={router1} />
  </Provider>
)