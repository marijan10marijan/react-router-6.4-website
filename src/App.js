//Browser router imports
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

//Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from './layouts/HelpLyout';
import ProductsLayout from "./layouts/ProductsLayout";

//Pages
import Home from './pages/Home';
import Features from './pages/Features';
import NotFound from "./pages/NotFound";

//Help Pages
import Faq from './pages/helpPages/Faq';
import Contact, { submitAction } from './pages/helpPages/Contact';

//Products Pages
import Products, { productsLoader } from './pages/productsPages/Products';
import SingleProduct, { singleProductLoader } from "./pages/productsPages/SingleProduct";
import ProductsError from "./pages/productsPages/ProductsError";


//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='features' element={<Features />} />
      <Route path='help' element={<HelpLayout />} >
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={submitAction} />
      </Route>
      <Route path='products' element={<ProductsLayout />} errorElement={<ProductsError />}>
        <Route index element={<Products />} loader={productsLoader} />
        <Route path=":id" element={<SingleProduct />} loader={singleProductLoader} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
