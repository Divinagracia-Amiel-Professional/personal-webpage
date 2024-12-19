import { createBrowserRouter } from "react-router";
import App from "../App";
import {
    Home,
    About,
    Projects
} from "../pages/pagesIndex";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "projects",
                element: <Projects />
            },
        ]
    }
])

export default router