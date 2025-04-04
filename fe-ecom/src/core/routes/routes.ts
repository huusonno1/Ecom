import HomePage from "../../pages/home/HomePage";
import ShopPage from "../../pages/shop/ShopPage";
import SingleProductPage from "../../pages/shop/SingleProductPage";
import CheckoutPage from "../../pages/checkout/CheckoutPage";
import ContactPage from "../../pages/contact/ContactPage";
import AboutPage from "../../pages/about/AboutPage";
import BlogPage from "../../pages/blog/BlogPage";
export interface IRoute {
  path: string;
  component: React.ComponentType;
}

const routes: IRoute[] = [
  { path: "/", component: HomePage },
  { path: "/shop", component: ShopPage },
  { path: "/shop/idProduct", component: SingleProductPage },
  { path: "/checkout", component: CheckoutPage },
  { path: "/contact", component: ContactPage },
  { path: "/about", component: AboutPage },
  { path: "/blog", component: BlogPage },
];

export default routes;
