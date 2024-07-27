import { Link, Navigate, createBrowserRouter } from "react-router-dom";
import { CharacterPage } from "../pages/CharacterPage";
import { CharacterDetails } from "../pages/CharacterDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/characters" />,
  },
  {
    path: "/characters",
    element: <CharacterPage />,
  },
  {
    path: "/characters/:characterId",
    element: <CharacterDetails />,
  },
  {
    path: "*",
    element: (
      <div>
        <h1>404 not found </h1>
        <h2>
          <Link to="/characters">Go to Character page</Link>
        </h2>
      </div>
    ),
  },
]);
