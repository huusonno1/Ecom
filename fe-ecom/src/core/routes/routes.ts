import HomePage from "../../pages/home/HomePage";
import ShopPage from "../../pages/shop/ShopPage";
export interface IRoute {
  path: string
  component: React.ComponentType
}

const routes: IRoute[] = [
  { path: "/", component: HomePage },
  { path: "/shop", component: ShopPage }
];

export default routes
