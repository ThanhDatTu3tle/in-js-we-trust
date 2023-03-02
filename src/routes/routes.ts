import config from "../config";

// Layouts
import { MainLayout } from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import Result from "../pages/Result";
import Apologize from "../pages/Apologize/Apologize";

import QuestionChallenge from "../pages/Challenge/QuestionChallenge";

import Question1 from "../pages/Challenge/Question1";
import Question2 from "../pages/Challenge/Question2";
import Question3 from "../pages/Challenge/Question3";
import Question4 from "../pages/Challenge/Question4";
import Question5 from "../pages/Challenge/Question5";
import Question6 from "../pages/Challenge/Question6";
import Question7 from "../pages/Challenge/Question7";

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: MainLayout },
    { path: config.routes.result, component: Result, layout: MainLayout },
    { path: config.routes.apologize, component: Apologize, layout: MainLayout },
    { path: config.routes.question, component: QuestionChallenge, layout: MainLayout },

    { path: config.routes.question1, component: Question1, layout: MainLayout },
    { path: config.routes.question2, component: Question2, layout: MainLayout },
    { path: config.routes.question3, component: Question3, layout: MainLayout },
    { path: config.routes.question4, component: Question4, layout: MainLayout },
    { path: config.routes.question5, component: Question5, layout: MainLayout },
    { path: config.routes.question6, component: Question6, layout: MainLayout },
    { path: config.routes.question7, component: Question7, layout: MainLayout },
]
  
const privateRoutes: any = [
    // { path: config.routes.admin, component: Admin, layout: AdminLayout },
]
  
export { publicRoutes, privateRoutes };
