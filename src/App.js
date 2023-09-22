import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/RootLayout";
import Home from './pages/Home';
import { loader as productLoader } from "./pages/Home";
import Categories from "./pages/Categories";
import Laptop, { loader as laptopLoader } from "./pages/Laptop";
import Mobile, { loader as mobileLoader } from "./pages/Mobile ";
import Tablet ,{ loader as tabletLoader } from "./pages/Tablet";
import Headphones,{ loader as headphonesLoader } from "./pages/Headphones";
import ProductForm, { action as submitProductAction} from "./pages/ProductForm";
import SignupForm, {action as SignupFormAction} from "./pages/SignupForm";
import SigninForm, {action as SigninFormAction} from "./pages/SigninForm";
import './App.css';


const routes = createBrowserRouter([
  { path: "/", element: <RootLayout></RootLayout>, 
    children: [ 
    { path: "/", element: <Home></Home>, loader : productLoader },
    { path:"/category", element: <Categories></Categories>},
    { path: "/category/laptops", element: <Laptop></Laptop>, loader : laptopLoader },
    { path: "/category/mobiles", element: <Mobile></Mobile>, loader : mobileLoader },
    { path: "/category/tablets", element: <Tablet></Tablet>, loader : tabletLoader },
    { path: "/category/headphones", element: <Headphones></Headphones>, loader : headphonesLoader },
    { path: "/new", element: <ProductForm></ProductForm>, action : submitProductAction },
    { path: "/register", element: <SignupForm></SignupForm>, action : SignupFormAction }, 
    { path: "/signin", element: <SigninForm></SigninForm>, action: SigninFormAction}
  ]
}
])

function App() {
  return (
   <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
