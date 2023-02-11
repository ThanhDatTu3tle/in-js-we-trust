import config from "../config";

// Layouts
import { MainLayout } from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import Result from "../pages/Result";

import Question1 from "../pages/Challenge/Question1";
import Question2 from "../pages/Challenge/Question2";
import Question3 from "../pages/Challenge/Question3";

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: MainLayout },
    { path: config.routes.result, component: Result, layout: MainLayout },

    { path: config.routes.question1, component: Question1, layout: MainLayout },
    { path: config.routes.question2, component: Question2, layout: MainLayout },
    { path: config.routes.question3, component: Question3, layout: MainLayout },
]
  
const privateRoutes: any = [
    // { path: config.routes.admin, component: Admin, layout: AdminLayout },
]
  
export { publicRoutes, privateRoutes };
