import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Results from "../components/Results";
import Welcome from "../components/Welcome";
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
                element: <Results/>
            },
            {
                path: '/videos',
                element: <Results/>
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