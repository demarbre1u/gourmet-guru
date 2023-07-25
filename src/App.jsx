import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import BattleRoyale from "./pages/battle-royale";
import { Wheel } from "./pages/wheel";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/battle-royale",
            element: <BattleRoyale />
        },
        {
            path: "/wheel",
            element: <Wheel />
        }
    ],
    {
        basename: "/gourmet-guru/"
    }
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
