import HomePage from "../../pages/home/HomePage";
import ShopPage from "../../pages/shop/ShopPage";
import SingleProductPage from "../../pages/shop/SingleProductPage";
export interface IRoute {
  path: string;
  component: React.ComponentType;
}

const routes: IRoute[] = [
  { path: "/", component: HomePage },
  { path: "/shop", component: ShopPage },
  { path: "/shop/idProduct", component: SingleProductPage },
];

export default routes;
