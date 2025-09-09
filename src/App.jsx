import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import PageError from "./pages/Error";
import User from "./pages/User";
import Menu from "./components/Menu"
import SideBar from "./components/SideBar"
import { userLoader } from "./data/Fetch";

function RouteFallback() {
  return <div className="route-fallback">Chargement…</div>;
}

const router = createBrowserRouter(
  [
    {
      path: "/user",
      element: <Root />,
      errorElement: <PageError />,
      HydrateFallback: RouteFallback,
      children: [
        {
          index: true,
          element: <PageError />,
        },
        {
          path: ":id",
          element: <User />,
          errorElement: <PageError />,
          loader: userLoader,
          },
        {
          path: "*",
          element: <PageError />,
        },
      ],
    },
  ],
  {
    future: {
      v7_partialHydration: false,
    },
  }
);

function Root() {
  return (
    <>
      <Menu />
      <div className="app-layout">
        <SideBar />
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
