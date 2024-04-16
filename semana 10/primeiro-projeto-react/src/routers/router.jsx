import { createBrowserRouter } from "react-router-dom";

import PaginaInicial from "../pages/PaginaInicial";
import PaginaCadastro from "../pages/PaginaCadastro";
import PaginaTrilhas from "../pages/PaginaListaTrilhas";
import App from "../App"


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
        {
            path: "/",
            element: <PaginaInicial />
        },
        {
            path: "/cadastro",
            element: <PaginaCadastro />
        },
        {
            path: "/trilhas",
            element: <PaginaTrilhas />
        },
    ]
}
])

export default router;