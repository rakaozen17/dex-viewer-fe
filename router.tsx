import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from './variables/route';
import LazyLoad from "./components/LazyLoad/LazyLoad";
import NotFound from "./pages/misc/NotFound/NotFound";
import React from "react";
const AppRouter = () => {
    const router = createBrowserRouter(routes.map((route) => {
        return{
            path: route.path,
            element:(<LazyLoad component={route.filePath}/>)
        }
    }).concat({ path: '*', element: <NotFound /> }));

    return (
        <RouterProvider router={router} />
    );
}

export default AppRouter