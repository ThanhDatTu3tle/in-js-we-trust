import config from "../config";

// Layouts
import { MainLayout } from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import Challenge from "../pages/Challenge";

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: MainLayout },
    { path: config.routes.challenge, component: Challenge, layout: MainLayout },
]
  
const privateRoutes: any = [
    // { path: config.routes.admin, component: Admin, layout: AdminLayout },
]
  
export { publicRoutes, privateRoutes };
