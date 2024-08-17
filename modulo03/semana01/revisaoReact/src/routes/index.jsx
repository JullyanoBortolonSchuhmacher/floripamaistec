import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '../pages/home'
import { HistoryPage } from "../pages/history";
import { Layout } from "../template";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, //usa esse layout
    children: [
      {
        path: '/', //caminho da página
        element: <HomePage />
      },
      {
        path: "/historico",
        element: <HistoryPage />
      }
    ]
  }

  
])