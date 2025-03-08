import HomePage from "../../pages/home/HomePage";
export interface IRoute {
  path: string
  component: React.ComponentType
}

const routes: IRoute[] = [
  { path: "/", component: HomePage }
];

export default routes
