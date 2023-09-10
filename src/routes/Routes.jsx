import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import PortfolioDetails from "../pages/PortfolioDetails/PortfolioDetails";
import BlogSingle from "../pages/BlogSingle/BlogSingle";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/portfolio-details',
                element: <PortfolioDetails />
            },
            {
                path: '/blog-single',
                element: <BlogSingle />
            },
        ]
    },
]);
