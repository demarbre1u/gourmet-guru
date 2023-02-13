import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import BattleRoyal from "./pages/battle-royal";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/battle-royal",
        element: <BattleRoyal />
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
