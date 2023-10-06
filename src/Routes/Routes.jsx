import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Results from "../components/Results";
import Welcome from "../components/Welcome";
import SearchResult from "../components/results/SearchResult";
import Videos from "../components/results/VideosResult";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Welcome/>,
            },
            {
                path: '/search',
                element: <SearchResult/>
            },
            {
                path: '/videos',
                element: <Videos/>
            },
            {
                path: '/news',
                element: <Results/>
            },
            {
                path: '/images',
                element: <Results/>
            }
        ]
    }
]);

export default router;