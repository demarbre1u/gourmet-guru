import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import BattleRoyale from "./pages/battle-royale";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/battle-royale",
        element: <BattleRoyale />
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
