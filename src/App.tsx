import React from 'react';
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { publicRoutes } from "./routes";

export const QuestionContext = React.createContext({ state: false })

const App: React.FC = () => {
  return (
    <QuestionContext.Provider value={{ state: false }}>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {

              const Page = route.component;

              let Layout = MainLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
              })}
          </Routes>
        </div>
      </Router>
    </QuestionContext.Provider>
  );
}

export default App;
